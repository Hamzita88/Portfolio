// ============================================
// INTERNATIONALIZATION (i18n)
// Multi-language support with RTL for Arabic
// ============================================

class I18nManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.translations = window.translations || translations;
        this.init();
    }

    // Get initial language: localStorage > default (Spanish)
    getInitialLanguage() {
        const savedLang = localStorage.getItem('language');
        return savedLang || 'es';
    }

    // Initialize i18n
    init() {
        this.applyLanguage(this.currentLang);
        this.setupLanguageSelector();
    }

    // Apply language to page
    applyLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('language', lang);

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        // Update all translatable elements
        this.updatePageContent();
        this.updateLanguageSelector();
    }

    // Update page content with translations
    updatePageContent() {
        const t = this.translations[this.currentLang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(t, key);

            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getNestedTranslation(t, key);

            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });

        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            const translation = this.getNestedTranslation(t, key);

            if (translation) {
                element.setAttribute('aria-label', translation);
            }
        });
    }

    // Get nested translation using dot notation (e.g., "nav.home")
    getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    // Setup language selector
    setupLanguageSelector() {
        const selector = document.querySelector('.lang-selector');
        if (selector) {
            selector.addEventListener('click', () => this.showLanguageMenu());
        }
    }

    // Show language selection menu
    showLanguageMenu() {
        const languages = [
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'fr', name: 'Français', flag: '🇫🇷' },
            { code: 'ar', name: 'العربية', flag: '🇲🇦' }
        ];

        // Create menu if it doesn't exist
        let menu = document.querySelector('.lang-menu');
        if (!menu) {
            menu = document.createElement('div');
            menu.className = 'lang-menu';
            menu.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
        background: var(--bg-dark-card);
        border: 2px solid var(--accent-primary);
        border-radius: var(--radius-sm);
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 1000;
        min-width: 150px;
      `;

            languages.forEach(lang => {
                const btn = document.createElement('button');
                btn.className = 'lang-option';
                btn.textContent = `${lang.flag} ${lang.name}`;
                btn.style.cssText = `
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          text-align: left;
          border-radius: 0.25rem;
          transition: all 0.2s;
          color: var(--text-dark);
          font-family: var(--font-body);
        `;

                btn.addEventListener('mouseenter', () => {
                    btn.style.backgroundColor = 'var(--accent-primary)';
                    btn.style.color = 'white';
                });

                btn.addEventListener('mouseleave', () => {
                    btn.style.backgroundColor = 'transparent';
                    btn.style.color = 'var(--text-dark)';
                });

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.changeLanguage(lang.code);
                    menu.remove();
                });

                if (lang.code === this.currentLang) {
                    btn.style.backgroundColor = 'var(--accent-primary)';
                    btn.style.color = 'white';
                }

                menu.appendChild(btn);
            });

            const selector = document.querySelector('.lang-selector');
            selector.parentElement.style.position = 'relative';
            selector.parentElement.appendChild(menu);

            // Close menu when clicking outside
            setTimeout(() => {
                document.addEventListener('click', function closeMenu(e) {
                    if (!menu.contains(e.target) && e.target !== selector) {
                        menu.remove();
                        document.removeEventListener('click', closeMenu);
                    }
                });
            }, 0);
        }
    }

    // Change language
    changeLanguage(lang) {
        this.applyLanguage(lang);
    }

    // Update language selector button
    updateLanguageSelector() {
        const selector = document.querySelector('.lang-selector');
        if (selector) {
            const langNames = {
                es: '🇪🇸 ES',
                en: '🇬🇧 EN',
                fr: '🇫🇷 FR',
                ar: '🇲🇦 AR'
            };
            selector.textContent = langNames[this.currentLang] || 'ES';
        }
    }

    // Get current translation object
    t() {
        return this.translations[this.currentLang];
    }
}

// Initialize i18n manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.i18n = new I18nManager();
    });
} else {
    window.i18n = new I18nManager();
}

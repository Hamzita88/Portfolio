// ============================================
// ANIMATIONS - Scroll & Page Load
// ============================================

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupPageLoadAnimations();
        this.setupScrollAnimations();
    }

    // Page load animations
    setupPageLoadAnimations() {
        // Add fade-in animation to main container
        const container = document.querySelector('.container');
        if (container) {
            container.classList.add('fade-in');
        }

        // Stagger animations for cards
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });

        // Hero section animation
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.classList.add('fade-in');
        }
    }

    // Scroll-triggered animations using Intersection Observer
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-animate class
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));

        // Auto-add scroll-animate class to sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (!section.classList.contains('hero')) {
                section.classList.add('scroll-animate');
                observer.observe(section);
            }
        });
    }

    // Smooth scroll to anchor links
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Parallax effect for hero section (optional enhancement)
    setupParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.animationManager = new AnimationManager();
    });
} else {
    window.animationManager = new AnimationManager();
}

// Add scroll-based navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-bar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

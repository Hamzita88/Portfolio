const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const html = (file) => read(file).replace(/<!--[\s\S]*?-->/g, '');
const translations = require('../translations/translations.js');

test('contact mobile layout shrinks and wraps content without clipping or hover shifts', () => {
    const mobile = html('contact.html').match(/@media \(max-width: 768px\) \{([\s\S]*?)<\/style>/)[1];
    assert.match(mobile, /\.contact-grid\s*\{\s*grid-template-columns: minmax\(0, 1fr\);/);
    assert.match(mobile, /\.contact-grid > div,\s*\.contact-details\s*\{\s*min-width: 0;/);
    assert.match(mobile, /\.contact-details\s*\{\s*overflow-wrap: anywhere;/);
    assert.match(mobile, /\.contact-method:hover\s*\{\s*transform: none;/);
    assert.doesNotMatch(mobile, /overflow(?:-x)?:\s*(?:hidden|clip)/);
});

test('home features the real Polaris project before profile and learning', () => {
    const page = html('index.html');
    const project = page.indexOf('id="featured-project"');
    const profile = page.indexOf('id="profile"');
    assert.ok(project >= 0 && profile > project, 'project must precede supporting profile');
    const featured = page.slice(project, profile);
    assert.match(featured, /Polaris Insights/);
    assert.match(featured, /data-i18n="projects\.polaris_access"/);
    assert.match(featured, /href="https:\/\/github\.com\/Hamzita88\/Polaris"/);
    assert.match(featured, /href="projects\.html"/);
    assert.doesNotMatch(featured, /polaris-dashboard\.png|<canvas|<svg/);
});

test('all page footers are discreet and contain real contact links without attribution', () => {
    const footers = ['index.html', 'about.html', 'projects.html', 'contact.html', 'success.html']
        .map(file => [file, html(file).match(/<footer class="footer">([\s\S]*?)<\/footer>/)[1]]);
    for (const [, footer] of footers) {
        assert.match(footer, /© 2026 Hamza Laouzi/);
        assert.doesNotMatch(footer, /footer\.(?:made_with|by)|Hecho con|❤️/);
    }
    for (const [file, footer] of footers) {
        for (const url of ['https://github.com/Hamzita88', 'https://linkedin.com/in/hamza-laouzi', 'mailto:hamzita88@gmail.com']) {
            assert.ok(footer.includes(`href="${url}"`), `${file}: ${url}`);
        }
    }
    for (const language of Object.values(translations)) {
        assert.equal(language.footer.made_with, undefined);
        assert.equal(language.footer.by, undefined);
    }
});

test('every rendered translation key resolves in each supported language', () => {
    for (const file of ['index.html', 'about.html', 'projects.html', 'contact.html', 'success.html']) {
        const keys = [...html(file).matchAll(/data-i18n(?:-placeholder|-aria)?="([^"]+)"/g)].map(match => match[1]);
        for (const key of keys) {
            for (const language of Object.keys(translations)) {
                const value = key.split('.').reduce((item, part) => item?.[part], translations[language]);
                assert.equal(typeof value, 'string', `${file} ${language}: ${key}`);
                assert.ok(value.trim(), `${file} ${language}: ${key}`);
            }
        }
    }
});

test('home distinguishes current SQL work from ongoing learning', () => {
    const page = html('index.html');
    for (const key of ['current_title', 'current_text', 'learning_title', 'learning_text']) {
        assert.ok(page.includes(`data-i18n="home.${key}"`), key);
    }
    assert.match(page, /SQL/);
    assert.match(page, /Python/);
    assert.match(page, /ClickHouse/);
    assert.match(page, /AulaDigital/);
    assert.doesNotMatch(page, /Full Stack|Especializado en/);
    const data = JSON.parse(page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(data.jobTitle, 'Programador');
    assert.equal(data.alumniOf, undefined);
});

test('new home and project copy has a translation and matching Spanish fallback', () => {
    for (const file of ['index.html', 'projects.html']) {
        const elements = [...html(file).matchAll(/<([a-z][\w-]*)\b[^>]*data-i18n="((?:home|projects)\.[^"]+)"[^>]*>([^<]*)<\/\1>/g)];
        assert.ok(elements.length > 0);
        for (const [, , key, fallback] of elements) {
            for (const lang of ['es', 'en', 'fr', 'ar']) {
                const value = key.split('.').reduce((item, part) => item?.[part], translations[lang]);
                assert.equal(typeof value, 'string', `${lang}: ${key}`);
                assert.ok(value.trim(), `${lang}: ${key}`);
                if (lang === 'es') assert.equal(fallback.trim(), value, key);
            }
        }
    }
});

test('Polaris preview is intentional text and external links disclose restricted access', () => {
    const page = html('projects.html');
    assert.match(page, /class="project-preview"/);
    assert.doesNotMatch(page, /polaris-dashboard\.png/);
    assert.match(page, /data-i18n="projects\.polaris_access"/);
    assert.match(page, /data-i18n="projects\.polaris_demo"/);
    for (const url of ['https://polaris-insights.vercel.app/', 'https://github.com/Hamzita88/Polaris']) {
        assert.ok(page.includes(`href="${url}" target="_blank" rel="noopener noreferrer"`));
    }
});

test('all pages retain four real navigation links and mobile CSS does not hide them', () => {
    for (const file of ['index.html', 'about.html', 'projects.html', 'contact.html', 'success.html']) {
        const navigation = html(file).match(/<ul class="nav-links">([\s\S]*?)<\/ul>/)[1];
        assert.deepEqual([...navigation.matchAll(/href="([^"]+)"/g)].map((match) => match[1]),
            ['index.html', 'about.html', 'projects.html', 'contact.html']);
    }
    const css = read('css/styles.css');
    const mobile = css.slice(css.indexOf('@media (max-width: 768px)'));
    assert.match(mobile, /\.nav-bar\s*\{\s*position: sticky;/);
    assert.match(mobile, /\.nav-links\s*\{\s*display: grid;/);
    assert.doesNotMatch(mobile, /\.nav-links\s*\{[^}]*display: none/s);
    assert.match(css, /\.nav-bar a:focus-visible/);
});

test('new translated content is applied by the existing i18n manager', () => {
    const key = 'home.learning_text';
    const element = { getAttribute: () => key, textContent: '' };
    const document = { readyState: 'loading', addEventListener() {},
        querySelectorAll: (selector) => selector === '[data-i18n]' ? [element] : [] };
    const context = vm.createContext({ document, window: {}, translations });
    vm.runInContext(`${read('js/i18n.js')}\nthis.Manager = I18nManager;`, context);
    const manager = Object.create(context.Manager.prototype);
    manager.translations = translations;
    for (const language of Object.keys(translations)) {
        manager.currentLang = language;
        manager.updatePageContent();
        assert.equal(element.textContent, translations[language].home.learning_text);
    }
});

test('every page uses the current content version for shared changed assets', () => {
    const assets = ['css/styles.css', 'translations/translations.js'];
    const pages = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
    assert.ok(pages.length > 0);
    for (const asset of assets) {
        // Normalize Git checkout line endings so Windows and Linux agree.
        const version = createHash('sha256').update(read(asset).replace(/\r\n/g, '\n')).digest('hex').slice(0, 12);
        for (const page of pages) {
            const references = [...html(page).matchAll(/(?:href|src)="([^"]+)"/g)]
                .map((match) => match[1]).filter((url) => url.split('?')[0] === asset);
            assert.deepEqual(references, [`${asset}?v=${version}`], `${page}: ${asset}`);
        }
    }
});

test('Netlify revalidates fixed filenames and extensionless pages', () => {
    const config = read('netlify.toml');
    const headers = config.split('[[headers]]').slice(1);
    assert.ok(headers.length > 0);
    assert.ok(headers.some((block) => /for\s*=\s*"\/\*"/.test(block)));
    for (const block of headers) {
        assert.match(block, /Cache-Control\s*=\s*"public, max-age=0, must-revalidate"/);
        assert.doesNotMatch(block, /immutable|max-age=31536000/);
    }
});

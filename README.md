# Portfolio Personal - Hamza Laouzi

Portfolio personal desarrollado con HTML5, CSS3 y JavaScript Vanilla (ES6+). Diseño Bento Grid con soporte multi-idioma y modo oscuro/claro.

## 🚀 Características

- ✅ **Multi-Page Application (MPA)**: 4 páginas (Inicio, Sobre Mí, Proyectos, Contacto)
- ✅ **Diseño Bento Grid**: Layout moderno con CSS Grid
- ✅ **Modo Oscuro/Claro**: Toggle con persistencia en localStorage
- ✅ **Multi-idioma (i18n)**: Español, Inglés, Francés, Árabe (con soporte RTL)
- ✅ **Animaciones**: Scroll y page load animations
- ✅ **Formulario Netlify**: Integración nativa sin backend
- ✅ **Responsive**: Diseño adaptable a todos los dispositivos
- ✅ **SEO Optimizado**: Meta tags y HTML semántico

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html              # Página de inicio
├── about.html              # Sobre mí
├── projects.html           # Proyectos (Coming Soon)
├── contact.html            # Contacto con formulario
├── netlify.toml            # Configuración de Netlify
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── theme-toggle.js     # Modo oscuro/claro
│   ├── i18n.js             # Sistema de idiomas
│   └── animations.js       # Animaciones
├── translations/
│   └── translations.js     # Traducciones (ES, EN, FR, AR)
└── assets/
    ├── images/             # Imágenes del portfolio
    └── cv/                 # CV en PDF
```

## 🛠️ Stack Tecnológico

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, Animations
- **JavaScript ES6+**: Vanilla JS (sin frameworks)
- **Google Fonts**: Space Grotesk, Inter
- **Netlify**: Hosting y Forms

## 🎨 Paleta de Colores

### Modo Oscuro (Default)
- Background: `#0F172A`
- Text: `#F8FAFC`
- Accent: `#2563EB`

### Modo Claro
- Background: `#F8FAFC`
- Text: `#0F172A`
- Accent: `#2563EB`

## 🌐 Idiomas Soportados

- 🇪🇸 **Español** (Default)
- 🇬🇧 **English**
- 🇫🇷 **Français**
- 🇲🇦 **العربية** (Arabic - RTL)

## 📝 Antes de Desplegar

### 1. Actualizar Información Personal

Edita los siguientes archivos para personalizar tu información:

#### En todas las páginas HTML:
- **Email**: Busca `hamza@example.com` y reemplázalo con tu email real
- **LinkedIn**: Busca `linkedin.com/in/hamza-laouzi` y actualiza con tu perfil

#### En `about.html`:
- Rellena el párrafo vacío (`<p class="mt-2">`) con tu historia personal

### 2. Añadir tu CV

1. Crea tu CV en formato PDF
2. Nómbralo: `CV_Hamza_Laouzi.pdf`
3. Colócalo en: `assets/cv/CV_Hamza_Laouzi.pdf`
4. Elimina el archivo `CV_PLACEHOLDER.md`

### 3. Añadir Proyectos (Opcional)

En `projects.html`, descomenta la sección de template y añade tus proyectos:

```html
<div class="card project-card">
  <img src="assets/images/project1.jpg" alt="Project Name">
  <h3 class="card-title">Nombre del Proyecto</h3>
  <p class="text-secondary">Descripción breve del proyecto.</p>
  <div class="project-tags">
    <span class="project-tag">HTML</span>
    <span class="project-tag">CSS</span>
  </div>
</div>
```

## 🚀 Despliegue en Netlify

### Opción 1: Drag & Drop (Más Fácil)

1. Ve a [Netlify](https://app.netlify.com/)
2. Arrastra la carpeta `Portfolio` completa a Netlify
3. ¡Listo! Tu sitio estará en línea

### Opción 2: Git Integration (Recomendado)

1. Crea un repositorio en GitHub
2. Sube tu código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```
3. En Netlify:
   - Click en "New site from Git"
   - Conecta tu repositorio de GitHub
   - Build settings:
     - Build command: (dejar vacío)
     - Publish directory: `.`
   - Click en "Deploy site"

### Verificar Netlify Forms

Después del despliegue:
1. Ve a tu sitio en Netlify
2. Navega a la página de Contacto
3. Envía un mensaje de prueba
4. Verifica en Netlify Dashboard → Forms que el mensaje llegó

## 🧪 Probar Localmente

### Opción 1: Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 2: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Abre en navegador: http://localhost:8000
```

### Opción 3: Node.js serve
```bash
npx serve .
```

## ✅ Checklist Pre-Despliegue

- [ ] Actualizar email personal en todas las páginas
- [ ] Actualizar URL de LinkedIn
- [ ] Añadir CV en PDF a `assets/cv/`
- [ ] Rellenar párrafo vacío en `about.html`
- [ ] (Opcional) Añadir proyectos en `projects.html`
- [ ] Probar todas las páginas localmente
- [ ] Verificar que el cambio de tema funciona
- [ ] Probar cambio de idioma (todos los 4)
- [ ] Verificar que las animaciones funcionan
- [ ] Probar formulario de contacto después del despliegue

## 🎯 Funcionalidades a Probar

### Modo Oscuro/Claro
- [ ] Toggle cambia el tema
- [ ] Preferencia se guarda en localStorage
- [ ] Funciona en todas las páginas

### Multi-idioma
- [ ] Selector muestra 4 idiomas
- [ ] Cambio de idioma actualiza todo el contenido
- [ ] Árabe activa RTL (dirección derecha a izquierda)
- [ ] Preferencia se guarda en localStorage

### Animaciones
- [ ] Fade-in al cargar página
- [ ] Cards aparecen con stagger effect
- [ ] Scroll animations funcionan
- [ ] Navbar cambia al hacer scroll

### Formulario de Contacto
- [ ] Validación HTML5 funciona
- [ ] Formulario se envía correctamente
- [ ] Mensaje de éxito aparece
- [ ] Netlify recibe el mensaje

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
  --accent-primary: #2563EB;  /* Tu color principal */
  --bg-dark: #0F172A;         /* Fondo modo oscuro */
  --bg-light: #F8FAFC;        /* Fondo modo claro */
}
```

### Cambiar Fuentes

Edita el import en `css/styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap');
```


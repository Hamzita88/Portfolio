# 🌐 Portfolio Personal - Hamza Laouzi

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/hamzalaouzi/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Del Mundo Empresarial al Desarrollo Web** - Portfolio profesional de Hamza Laouzi, Desarrollador Web Full Stack con experiencia en ventas B2B.

🔗 **[Ver Portfolio en Vivo](https://hamzalaouzi.netlify.app)** | 📧 **[Contacto](mailto:hamzita88@gmail.com)** | 💼 **[LinkedIn](https://linkedin.com/in/hamza-laouzi)**

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación Local](#-instalación-local)
- [Despliegue](#-despliegue)
- [SEO y Rendimiento](#-seo-y-rendimiento)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Roadmap](#-roadmap)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

## 🎯 Sobre el Proyecto

Este portfolio representa mi transición del mundo de las ventas B2B al desarrollo web. Combina diseño moderno, rendimiento optimizado y las mejores prácticas de SEO para crear una experiencia profesional que refleja mi enfoque único: **resolver problemas de negocio con soluciones técnicas elegantes**.

### ✨ Diferenciadores Clave

- 🎨 **Diseño Bento Grid** - Layout moderno y visualmente atractivo
- 🌍 **Multiidioma** - Soporte para 4 idiomas (ES, EN, FR, AR)
- 🔍 **SEO Avanzado** - Open Graph, JSON-LD, meta tags optimizados
- ⚡ **Alto Rendimiento** - Vanilla JS, sin frameworks pesados
- 🎯 **Enfoque en Negocio** - Cada proyecto destaca el problema que resuelve

---

## 🚀 Características

### Funcionalidades Principales

- ✅ **Diseño Responsivo** - Optimizado para todos los dispositivos
- ✅ **Dark/Light Mode** - Cambio de tema con persistencia
- ✅ **Sistema i18n** - Internacionalización completa
- ✅ **Formulario de Contacto** - Integrado con Netlify Forms
- ✅ **Iconos Tecnológicos** - DevIcon para logos profesionales
- ✅ **Animaciones Suaves** - Scroll animations y transiciones
- ✅ **Accesibilidad** - ARIA labels, alt text descriptivo

### SEO y Meta Tags

- 🔍 Meta descriptions personalizadas por página
- 📱 Open Graph tags para redes sociales
- 🐦 Twitter Cards optimizadas
- 📊 JSON-LD structured data (schema.org/Person)
- 🔗 Canonical URLs en todas las páginas
- 🎯 Keywords estratégicos

---

## 🛠️ Tecnologías

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Stack Completo

**Frontend Development:**
- HTML5 - Estructura semántica
- CSS3 - Variables CSS, Flexbox, Grid
- JavaScript ES6+ - Vanilla JS puro
- Angular - Framework principal
- React Native - Desarrollo móvil

**Backend Development:**
- Java - Lenguaje principal
- SpringBoot - Framework backend
- PHP - Desarrollo web

**Bases de Datos:**
- MySQL - Base de datos relacional
- MongoDB - Base de datos NoSQL
- Firebase/Firestore - Backend as a Service

**DevOps & Tools:**
- Git - Control de versiones
- Docker - Containerización
- Netlify - Deployment y hosting

---

## 📂 Estructura del Proyecto

```
Portfolio/
├── 📄 index.html              # Página principal
├── 📄 about.html              # Sobre mí - Historia personal
├── 📄 projects.html           # Proyectos (próximamente)
├── 📄 contact.html            # Formulario de contacto
├── 📄 netlify.toml            # Configuración de Netlify
├── 📄 README.md               # Este archivo
├── 📄 .gitignore              # Archivos ignorados por Git
│
├── 📁 css/
│   └── styles.css             # Estilos principales (CSS Variables)
│
├── 📁 js/
│   ├── theme-toggle.js        # Cambio de tema dark/light
│   ├── i18n.js                # Sistema de internacionalización
│   └── animations.js          # Animaciones y efectos
│
├── 📁 translations/
│   └── translations.js        # Traducciones (ES, EN, FR, AR)
│
└── 📁 assets/
    ├── images/                # Imágenes del portfolio
    └── cv/                    # CV en PDF
```

---

## 💻 Instalación Local

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git instalado

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Hamzita88/Portfolio.git

# 2. Navegar al directorio
cd Portfolio

# 3. Abrir con Live Server (VS Code)
# O simplemente abrir index.html en tu navegador
```

**Nota:** Este es un proyecto Vanilla (HTML/CSS/JS puro), no requiere instalación de dependencias ni build process.

---

## 🚀 Despliegue

### Netlify (Recomendado)

#### Opción 1: Deploy desde GitHub

1. Conecta tu cuenta de GitHub con Netlify
2. Selecciona el repositorio `Portfolio`
3. Configuración automática (ya incluye `netlify.toml`)
4. ¡Deploy automático! 🎉

#### Opción 2: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login en Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Otras Opciones

- **GitHub Pages:** Ideal para proyectos estáticos
- **Vercel:** Alternativa rápida y sencilla
- **Cloudflare Pages:** Con CDN global incluido

---

## 📊 SEO y Rendimiento

### Optimizaciones Implementadas

✅ **SEO Técnico**
- Sitemap.xml (próximamente)
- Robots.txt configurado
- Meta tags optimizados
- Structured data (JSON-LD)
- Canonical URLs

✅ **Rendimiento**
- CSS minificado
- Imágenes optimizadas
- Lazy loading
- Sin dependencias pesadas
- Vanilla JavaScript (sin frameworks)

✅ **Accesibilidad**
- Contraste de colores WCAG AA
- Alt text en todas las imágenes
- ARIA labels en elementos interactivos
- Navegación por teclado

### Métricas Objetivo

- **Lighthouse Performance:** 95+
- **SEO Score:** 100
- **Accessibility:** 95+
- **Best Practices:** 100

---

## 📸 Capturas de Pantalla

### Página Principal (Dark Mode)
![Homepage Dark](https://via.placeholder.com/800x400?text=Homepage+Dark+Mode)

### Sobre Mí
![About Page](https://via.placeholder.com/800x400?text=About+Page)

### Responsive Design
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+Responsive)

---

## 🗺️ Roadmap

### ✅ Fase 1 - Fundación (Completado)
- [x] Diseño y estructura base
- [x] Sistema de temas (dark/light)
- [x] Internacionalización (i18n)
- [x] SEO básico

### ✅ Fase 2 - Optimización (Completado)
- [x] SEO avanzado (Open Graph, JSON-LD)
- [x] Iconos de tecnologías
- [x] Historia personal detallada
- [x] Formulario de contacto

### 🔄 Fase 3 - Contenido (En Progreso)
- [ ] Añadir 3-5 proyectos destacados
- [ ] Screenshots de proyectos
- [ ] Demos en vivo
- [ ] Casos de estudio

### 📅 Fase 4 - Expansión (Próximamente)
- [ ] Blog técnico
- [ ] Sección de testimonios
- [ ] Integración con GitHub API
- [ ] Analytics y métricas

---

## 🤝 Contribuciones

Aunque este es un portfolio personal, agradezco cualquier sugerencia o feedback. Si encuentras algún bug o tienes ideas de mejora:

1. Abre un [Issue](https://github.com/Hamzita88/Portfolio/issues)
2. Describe el problema o sugerencia
3. (Opcional) Envía un Pull Request

---

## 📧 Contacto

**Hamza Laouzi** - Desarrollador Web Full Stack

- 📧 Email: [hamzita88@gmail.com](mailto:hamzita88@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/hamza-laouzi](https://linkedin.com/in/hamza-laouzi)
- 🐙 GitHub: [github.com/Hamzita88](https://github.com/Hamzita88)
- 🌐 Portfolio: [hamzalaouzi.netlify.app](https://hamzalaouzi.netlify.app)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **DevIcon** - Por los iconos de tecnologías
- **Netlify** - Por el hosting gratuito
- **Google Fonts** - Por las tipografías
- **Comunidad Dev** - Por la inspiración y recursos

---

<div align="center">

**Hecho con ❤️ y ☕ por Hamza Laouzi**

*"De la adaptabilidad comercial a la lógica del código"*

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

</div>

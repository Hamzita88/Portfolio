// ============================================
// TRANSLATIONS - Multi-language Support
// ES (Spanish), EN (English), FR (French), AR (Arabic)
// ============================================

const translations = {
    es: {
        // Navigation
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        // Home Page
        home: {
            ai: "Inteligencia artificial",
            eyebrow: "Portfolio de Hamza Laouzi",
            headline: "Mi trabajo, antes que las palabras.",
            intro: "Programador con experiencia en bases de datos SQL. Este es el proyecto con el que comparto mi trabajo en desarrollo web.",
            featured: "Proyecto destacado / Aplicación web",
            cta_case_study: "Ver detalles del proyecto",
            cta_about: "Conocer mi trayectoria",
            learning_label: "Aprendizaje",
            contact_title: "¿Hablamos de desarrollo?",
            contact_text: "Más sobre mi trabajo y mi formación.",
            learning_text: "Estoy aprendiendo Python y ClickHouse, y cursando Inteligencia Artificial Avanzada en AulaDigital de la Comunidad de Madrid.",
            learning_title: "Formación en curso",
            current_text: "Trabajo como programador con bases de datos SQL. Este es el punto de partida de mi evolución hacia el desarrollo y los datos.",
            current_title: "Mi trabajo actual",
            title: 'Hamza Laouzi',
            subtitle: "Programación y datos",
            description: "Soy programador y trabajo con bases de datos SQL. Estoy ampliando mis conocimientos en Python, ClickHouse e inteligencia artificial para seguir creciendo profesionalmente.",
            cta_projects: 'Ver Proyectos',
            cta_contact: 'Contactar',
            skills_title: "Otras tecnologías de mi recorrido",
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de Datos',
            tools: 'Herramientas',
            soft_skills_title: 'Habilidades Transferibles',
            soft_skills: [
                'Comunicación efectiva',
                'Negociación',
                'Orientación a resultados',
                'Empatía con el cliente',
                'Resolución de conflictos'
            ]
        },
        // About Page
        about: {
            title: 'Sobre Mí',
            subtitle: 'Desarrollador Web | Ex-Comercial',
            background_title: 'Mi Historia',
            background_text: 'Estudiante de Desarrollo de Aplicaciones Web (DAW) con experiencia previa en ventas B2B y atención al cliente.',
            skills_title: 'Stack Tecnológico',
            download_cv: 'Descargar CV',
            soft_skills_title: 'Habilidades Blandas'
        },
        // Projects Page
        projects: {
            polaris_source: "Ver repositorio",
            overview_title: "Sobre el proyecto",
            details_title: "Qué incluye",
            polaris_demo: "Abrir aplicación (acceso restringido)",
            polaris_access: "Acceso restringido: la aplicación requiere una cuenta por invitación. No es una demo pública.",
            polaris_campaigns: "Campañas: seguimiento de las acciones de marketing.",
            polaris_channels: "Canales: análisis del rendimiento por canal.",
            polaris_kpis: "KPIs: visión general de los indicadores de marketing.",
            polaris_description: "Dashboard de marketing que reúne indicadores, canales y campañas para explorar el rendimiento desde una misma interfaz.",
            polaris_preview: "Dashboard de marketing",
            title: 'Proyectos',
            subtitle: 'Mis trabajos y desarrollos',
            coming_soon: 'Próximamente',
            coming_soon_text: 'Estoy trabajando en proyectos increíbles. ¡Vuelve pronto para verlos!'
        },
        // Contact Page
        contact: {
            title: 'Contacto',
            subtitle: 'Hablemos de tu próximo proyecto',
            form_title: 'Envíame un mensaje',
            name_label: 'Nombre',
            name_placeholder: 'Tu nombre',
            email_label: 'Email',
            email_placeholder: 'tu@email.com',
            message_label: 'Mensaje',
            message_placeholder: 'Cuéntame sobre tu proyecto...',
            submit: 'Enviar Mensaje',
            or: 'O contáctame directamente',
            email_me: 'Enviar Email',
            linkedin: 'LinkedIn'
        },
        // Footer
        footer: {
            rights: 'Todos los derechos reservados',
            email: 'Email'
        }
    },

    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
        },
        // Home Page
        home: {
            ai: "Artificial intelligence",
            eyebrow: "Hamza Laouzi’s portfolio",
            headline: "My work, before the words.",
            intro: "A programmer with experience working with SQL databases. This project is how I share my work in web development.",
            featured: "Featured project / Web application",
            cta_case_study: "View project details",
            cta_about: "Explore my background",
            learning_label: "Learning",
            contact_title: "Let’s talk development.",
            contact_text: "More about my work and ongoing learning.",
            learning_text: "I am learning Python and ClickHouse, and taking the Advanced Artificial Intelligence course at AulaDigital, Community of Madrid.",
            learning_title: "Ongoing learning",
            current_text: "I work as a programmer with SQL databases. This is the starting point of my development and data journey.",
            current_title: "My current work",
            title: 'Hamza Laouzi',
            subtitle: "Programming and data",
            description: "I am a programmer working with SQL databases. I am expanding my knowledge of Python, ClickHouse and artificial intelligence to continue growing professionally.",
            cta_projects: 'View Projects',
            cta_contact: 'Get in Touch',
            skills_title: "Other technologies in my journey",
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Databases',
            tools: 'Tools',
            soft_skills_title: 'Transferable Skills',
            soft_skills: [
                'Effective communication',
                'Negotiation',
                'Results-oriented',
                'Customer empathy',
                'Conflict resolution'
            ]
        },
        // About Page
        about: {
            title: 'About Me',
            subtitle: 'Web Developer | Former Sales Professional',
            background_title: 'My Story',
            background_text: 'Web Application Development (DAW) student with previous experience in B2B sales and customer service.',
            skills_title: 'Tech Stack',
            download_cv: 'Download CV',
            soft_skills_title: 'Soft Skills'
        },
        // Projects Page
        projects: {
            polaris_source: "View repository",
            overview_title: "About the project",
            details_title: "What it includes",
            polaris_demo: "Open application (restricted access)",
            polaris_access: "Restricted access: the application requires an invited account. This is not a public demo.",
            polaris_campaigns: "Campaigns: tracking marketing activities.",
            polaris_channels: "Channels: performance analysis by channel.",
            polaris_kpis: "KPIs: an overview of marketing indicators.",
            polaris_description: "A marketing dashboard bringing together indicators, channels and campaigns to explore performance in a single interface.",
            polaris_preview: "Marketing dashboard",
            title: 'Projects',
            subtitle: 'My work and developments',
            coming_soon: 'Coming Soon',
            coming_soon_text: 'I\'m working on amazing projects. Check back soon to see them!'
        },
        // Contact Page
        contact: {
            title: 'Contact',
            subtitle: 'Let\'s talk about your next project',
            form_title: 'Send me a message',
            name_label: 'Name',
            name_placeholder: 'Your name',
            email_label: 'Email',
            email_placeholder: 'your@email.com',
            message_label: 'Message',
            message_placeholder: 'Tell me about your project...',
            submit: 'Send Message',
            or: 'Or contact me directly',
            email_me: 'Send Email',
            linkedin: 'LinkedIn'
        },
        // Footer
        footer: {
            rights: 'All rights reserved',
            email: 'Email'
        }
    },

    fr: {
        // Navigation
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            projects: 'Projets',
            contact: 'Contact'
        },
        // Home Page
        home: {
            ai: "Intelligence artificielle",
            eyebrow: "Portfolio de Hamza Laouzi",
            headline: "Mon travail, avant les mots.",
            intro: "Programmeur avec une expérience des bases de données SQL. Ce projet présente mon travail en développement web.",
            featured: "Projet à la une / Application web",
            cta_case_study: "Voir les détails du projet",
            cta_about: "Découvrir mon parcours",
            learning_label: "Apprentissage",
            contact_title: "Parlons développement.",
            contact_text: "En savoir plus sur mon travail et ma formation.",
            learning_text: "J’apprends Python et ClickHouse et je suis le cours d’intelligence artificielle avancée à AulaDigital de la Communauté de Madrid.",
            learning_title: "Formation en cours",
            current_text: "Je travaille comme programmeur avec des bases de données SQL. C’est le point de départ de mon évolution vers le développement et les données.",
            current_title: "Mon travail actuel",
            title: 'Hamza Laouzi',
            subtitle: "Programmation et données",
            description: "Je suis programmeur et je travaille avec des bases de données SQL. Je développe mes connaissances en Python, ClickHouse et intelligence artificielle pour continuer à progresser professionnellement.",
            cta_projects: 'Voir les Projets',
            cta_contact: 'Me Contacter',
            skills_title: "Autres technologies de mon parcours",
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de Données',
            tools: 'Outils',
            soft_skills_title: 'Compétences Transférables',
            soft_skills: [
                'Communication efficace',
                'Négociation',
                'Orientation résultats',
                'Empathie client',
                'Résolution de conflits'
            ]
        },
        // About Page
        about: {
            title: 'À Propos de Moi',
            subtitle: 'Développeur Web | Ex-Commercial',
            background_title: 'Mon Histoire',
            background_text: 'Étudiant en Développement d\'Applications Web (DAW) avec une expérience préalable en ventes B2B et service client.',
            skills_title: 'Stack Technologique',
            download_cv: 'Télécharger CV',
            soft_skills_title: 'Compétences Douces'
        },
        // Projects Page
        projects: {
            polaris_source: "Voir le dépôt",
            overview_title: "À propos du projet",
            details_title: "Ce qu’il propose",
            polaris_demo: "Ouvrir l’application (accès restreint)",
            polaris_access: "Accès restreint : l’application nécessite un compte sur invitation. Ce n’est pas une démonstration publique.",
            polaris_campaigns: "Campagnes : suivi des actions marketing.",
            polaris_channels: "Canaux : analyse des performances par canal.",
            polaris_kpis: "KPIs : vue d’ensemble des indicateurs marketing.",
            polaris_description: "Un tableau de bord marketing qui rassemble indicateurs, canaux et campagnes pour explorer les performances dans une même interface.",
            polaris_preview: "Tableau de bord marketing",
            title: 'Projets',
            subtitle: 'Mes travaux et développements',
            coming_soon: 'Bientôt Disponible',
            coming_soon_text: 'Je travaille sur des projets incroyables. Revenez bientôt pour les voir !'
        },
        // Contact Page
        contact: {
            title: 'Contact',
            subtitle: 'Parlons de votre prochain projet',
            form_title: 'Envoyez-moi un message',
            name_label: 'Nom',
            name_placeholder: 'Votre nom',
            email_label: 'Email',
            email_placeholder: 'votre@email.com',
            message_label: 'Message',
            message_placeholder: 'Parlez-moi de votre projet...',
            submit: 'Envoyer le Message',
            or: 'Ou contactez-moi directement',
            email_me: 'Envoyer Email',
            linkedin: 'LinkedIn'
        },
        // Footer
        footer: {
            rights: 'Tous droits réservés',
            email: 'Email'
        }
    },

    ar: {
        // Navigation
        nav: {
            home: 'الرئيسية',
            about: 'عني',
            projects: 'المشاريع',
            contact: 'اتصل'
        },
        // Home Page
        home: {
            ai: "الذكاء الاصطناعي",
            eyebrow: "ملف أعمال حمزة اللوزي",
            headline: "عملي أولاً، ثم الكلمات.",
            intro: "مبرمج لديه خبرة في العمل مع قواعد بيانات SQL. أشارك من خلال هذا المشروع عملي في تطوير الويب.",
            featured: "مشروع مميز / تطبيق ويب",
            cta_case_study: "عرض تفاصيل المشروع",
            cta_about: "تعرف على مسيرتي",
            learning_label: "التعلم",
            contact_title: "لنتحدث عن البرمجة.",
            contact_text: "المزيد عن عملي وتعلمي المستمر.",
            learning_text: "أتعلم Python وClickHouse وأتابع دورة الذكاء الاصطناعي المتقدم في AulaDigital التابعة لمنطقة مدريد.",
            learning_title: "تعلم مستمر",
            current_text: "أعمل مبرمجاً مع قواعد بيانات SQL. هذه نقطة البداية لتطوري في مجال البرمجة والبيانات.",
            current_title: "عملي الحالي",
            title: 'حمزة اللوزي',
            subtitle: "البرمجة والبيانات",
            description: "أنا مبرمج أعمل مع قواعد بيانات SQL. أوسع معرفتي بلغة Python وClickHouse والذكاء الاصطناعي لمواصلة تطوري المهني.",
            cta_projects: 'عرض المشاريع',
            cta_contact: 'تواصل معي',
            skills_title: "تقنيات أخرى في مسيرتي",
            frontend: 'الواجهة الأمامية',
            backend: 'الواجهة الخلفية',
            database: 'قواعد البيانات',
            tools: 'الأدوات',
            soft_skills_title: 'المهارات القابلة للنقل',
            soft_skills: [
                'التواصل الفعال',
                'التفاوض',
                'التوجه نحو النتائج',
                'التعاطف مع العميل',
                'حل النزاعات'
            ]
        },
        // About Page
        about: {
            title: 'عني',
            subtitle: 'مطور ويب | مندوب مبيعات سابق',
            background_title: 'قصتي',
            background_text: 'طالب تطوير تطبيقات الويب (DAW) مع خبرة سابقة في مبيعات B2B وخدمة العملاء.',
            skills_title: 'التقنيات المستخدمة',
            download_cv: 'تحميل السيرة الذاتية',
            soft_skills_title: 'المهارات الشخصية'
        },
        // Projects Page
        projects: {
            polaris_source: "عرض المستودع",
            overview_title: "عن المشروع",
            details_title: "ما الذي يتضمنه",
            polaris_demo: "فتح التطبيق (وصول مقيد)",
            polaris_access: "الوصول مقيد: يتطلب التطبيق حساباً بدعوة. هذا ليس عرضاً تجريبياً عاماً.",
            polaris_campaigns: "الحملات: متابعة الأنشطة التسويقية.",
            polaris_channels: "القنوات: تحليل الأداء حسب القناة.",
            polaris_kpis: "مؤشرات الأداء: نظرة عامة على مؤشرات التسويق.",
            polaris_description: "لوحة معلومات تسويقية تجمع المؤشرات والقنوات والحملات لاستكشاف الأداء من واجهة واحدة.",
            polaris_preview: "لوحة معلومات التسويق",
            title: 'المشاريع',
            subtitle: 'أعمالي وتطويراتي',
            coming_soon: 'قريباً',
            coming_soon_text: 'أعمل على مشاريع رائعة. عد قريباً لرؤيتها!'
        },
        // Contact Page
        contact: {
            title: 'اتصل',
            subtitle: 'لنتحدث عن مشروعك القادم',
            form_title: 'أرسل لي رسالة',
            name_label: 'الاسم',
            name_placeholder: 'اسمك',
            email_label: 'البريد الإلكتروني',
            email_placeholder: 'your@email.com',
            message_label: 'الرسالة',
            message_placeholder: 'أخبرني عن مشروعك...',
            submit: 'إرسال الرسالة',
            or: 'أو اتصل بي مباشرة',
            email_me: 'إرسال بريد إلكتروني',
            linkedin: 'لينكد إن'
        },
        // Footer
        footer: {
            rights: 'جميع الحقوق محفوظة',
            email: 'البريد الإلكتروني'
        }
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}

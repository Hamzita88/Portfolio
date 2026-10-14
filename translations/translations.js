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
            current_text: "Trabajo como programador con una base de datos de un call center: elaboro reportes con SQL y realizo tareas de mantenimiento de la base de datos.",
            current_environment: "Entorno de trabajo: CRM Octopus y Asterisk.",
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
            subtitle: 'Programador · Bases de datos SQL',
            experience_label: 'Experiencia actual',
            experience_title: 'Programación y bases de datos SQL',
            experience_text: 'Trabajo como programador con una base de datos de un call center.',
            reporting: 'Elaboración de reportes con SQL',
            maintenance: 'Tareas de mantenimiento de bases de datos',
            environment_title: 'Entorno de trabajo',
            environment_text: 'El entorno utiliza el CRM Octopus y Asterisk.',
            skills_context: 'Tecnologías de mi recorrido de formación y proyectos, separadas de mi trabajo actual con SQL.',
            story_title: 'Del trato con las personas al trabajo con datos',
            story_transfer: 'La experiencia comercial forma parte de mi recorrido y de mi manera de comunicarme y entender las necesidades de otras personas.',
            story_learning: 'Sigo ampliando mis conocimientos en Python, ClickHouse e inteligencia artificial avanzada para continuar creciendo profesionalmente.',
            background_title: 'Mi Historia',
            background_text: 'Mi recorrido incluye experiencia en ventas B2B y atención al cliente. Hoy trabajo como programador con una base de datos de un call center.',
            skills_title: 'Tecnologías de mi recorrido',
            download_cv: 'Descargar CV',
            soft_skills_title: 'Habilidades Blandas'
        },
        // Projects Page
        projects: {
            polaris_source: "Ver repositorio",
            case_label: "Caso de estudio / Aprendizaje",
            case_title: "Polaris: un proyecto para aprender",
            case_goal_title: "Objetivo",
            case_goal: "Explorar el desarrollo asistido por IA y aprender Next.js, un framework de React, mediante una aplicación de marketing y CRM.",
            case_contribution_title: "Mi aportación",
            case_contribution: "Desarrollé Polaris de forma individual, con asistencia de IA, como proyecto personal de aprendizaje.",
            case_workflow_title: "Aprendizaje y método",
            case_workflow: "Aprendí sobre SDD y TDD con Gentleman Programming. El repositorio recoge especificaciones y tareas con un enfoque de pruebas primero.",
            case_behavior_title: "Un comportamiento bajo prueba",
            case_behavior: "Las pruebas cubren el cambio de etapa de un lead y la generación de su actividad. También verifican que mantener la misma etapa no cambie el lead ni genere actividad.",
            case_spec_link: "Ver especificación SDD",
            case_test_link: "Ver prueba unitaria",
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
            title: 'Contacto profesional',
            subtitle: 'Hablemos de oportunidades en programación y bases de datos',
            availability: 'Interesado en oportunidades profesionales relacionadas con programación y bases de datos.',
            form_title: 'Envíame un mensaje',
            name_label: 'Nombre',
            name_placeholder: 'Tu nombre',
            email_label: 'Email',
            email_placeholder: 'tu@email.com',
            message_label: 'Mensaje',
            message_placeholder: 'Cuéntame sobre la oportunidad o el puesto...',
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
            current_text: "I work as a programmer with a call-center database: I produce SQL reports and carry out database maintenance tasks.",
            current_environment: "Work environment: Octopus CRM and Asterisk.",
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
            subtitle: 'Programmer · SQL databases',
            experience_label: 'Current experience',
            experience_title: 'Programming and SQL databases',
            experience_text: 'I work as a programmer with a call-center database.',
            reporting: 'Producing reports with SQL',
            maintenance: 'Database maintenance tasks',
            environment_title: 'Work environment',
            environment_text: 'The environment uses Octopus CRM and Asterisk.',
            skills_context: 'Technologies from my training and projects, separate from my current SQL work.',
            story_title: 'From working with people to working with data',
            story_transfer: 'My sales experience is part of my background and how I communicate and understand other people’s needs.',
            story_learning: 'I continue expanding my knowledge of Python, ClickHouse and advanced artificial intelligence to grow professionally.',
            background_title: 'My Story',
            background_text: 'My background includes experience in B2B sales and customer service. I now work as a programmer with a call-center database.',
            skills_title: 'Technologies in my journey',
            download_cv: 'Download CV',
            soft_skills_title: 'Soft Skills'
        },
        // Projects Page
        projects: {
            polaris_source: "View repository",
            case_label: "Case study / Learning",
            case_title: "Polaris: a project for learning",
            case_goal_title: "Goal",
            case_goal: "Explore AI-assisted development and learn Next.js, a React framework, through a marketing and CRM application.",
            case_contribution_title: "My contribution",
            case_contribution: "I developed Polaris individually, with AI assistance, as a personal learning project.",
            case_workflow_title: "Learning and method",
            case_workflow: "I learned about SDD and TDD with Gentleman Programming. The repository contains specifications and tasks with a test-first approach.",
            case_behavior_title: "One behavior under test",
            case_behavior: "The tests cover a lead’s stage change and the creation of its activity. They also verify that keeping the same stage leaves the lead unchanged and creates no activity.",
            case_spec_link: "View SDD specification",
            case_test_link: "View unit test",
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
            title: 'Professional contact',
            subtitle: 'Let’s talk about opportunities in programming and databases',
            availability: 'Interested in professional opportunities involving programming and databases.',
            form_title: 'Send me a message',
            name_label: 'Name',
            name_placeholder: 'Your name',
            email_label: 'Email',
            email_placeholder: 'your@email.com',
            message_label: 'Message',
            message_placeholder: 'Tell me about the opportunity or role...',
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
            current_text: "Je travaille comme programmeur avec une base de données de centre d’appels : je réalise des rapports avec SQL et des tâches de maintenance de la base de données.",
            current_environment: "Environnement de travail : CRM Octopus et Asterisk.",
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
            subtitle: 'Programmeur · Bases de données SQL',
            experience_label: 'Expérience actuelle',
            experience_title: 'Programmation et bases de données SQL',
            experience_text: 'Je travaille comme programmeur avec une base de données de centre d’appels.',
            reporting: 'Élaboration de rapports avec SQL',
            maintenance: 'Tâches de maintenance de bases de données',
            environment_title: 'Environnement de travail',
            environment_text: 'L’environnement utilise le CRM Octopus et Asterisk.',
            skills_context: 'Technologies de mon parcours de formation et de projets, distinctes de mon travail actuel avec SQL.',
            story_title: 'Du contact avec les personnes au travail avec les données',
            story_transfer: 'Mon expérience commerciale fait partie de mon parcours et de ma façon de communiquer et de comprendre les besoins des autres.',
            story_learning: 'Je développe mes connaissances en Python, ClickHouse et intelligence artificielle avancée pour continuer à progresser professionnellement.',
            background_title: 'Mon Histoire',
            background_text: 'Mon parcours comprend une expérience en ventes B2B et service client. Je travaille aujourd’hui comme programmeur avec une base de données de centre d’appels.',
            skills_title: 'Technologies de mon parcours',
            download_cv: 'Télécharger CV',
            soft_skills_title: 'Compétences Douces'
        },
        // Projects Page
        projects: {
            polaris_source: "Voir le dépôt",
            case_label: "Étude de cas / Apprentissage",
            case_title: "Polaris : un projet pour apprendre",
            case_goal_title: "Objectif",
            case_goal: "Explorer le développement assisté par IA et apprendre Next.js, un framework React, à travers une application de marketing et CRM.",
            case_contribution_title: "Ma contribution",
            case_contribution: "J’ai développé Polaris individuellement, avec l’assistance de l’IA, comme projet personnel d’apprentissage.",
            case_workflow_title: "Apprentissage et méthode",
            case_workflow: "J’ai découvert SDD et TDD avec Gentleman Programming. Le dépôt contient des spécifications et des tâches orientées vers les tests en premier.",
            case_behavior_title: "Un comportement testé",
            case_behavior: "Les tests couvrent le changement d’étape d’un prospect et la création de son activité. Ils vérifient aussi que le maintien à la même étape ne modifie pas le prospect et ne génère aucune activité.",
            case_spec_link: "Voir la spécification SDD",
            case_test_link: "Voir le test unitaire",
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
            title: 'Contact professionnel',
            subtitle: 'Parlons d’opportunités en programmation et bases de données',
            availability: 'Intéressé par des opportunités professionnelles en programmation et bases de données.',
            form_title: 'Envoyez-moi un message',
            name_label: 'Nom',
            name_placeholder: 'Votre nom',
            email_label: 'Email',
            email_placeholder: 'votre@email.com',
            message_label: 'Message',
            message_placeholder: 'Parlez-moi de l’opportunité ou du poste...',
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
            current_text: "أعمل مبرمجاً مع قاعدة بيانات مركز اتصال: أعد التقارير باستخدام SQL وأنفذ مهام صيانة قاعدة البيانات.",
            current_environment: "بيئة العمل: نظام CRM Octopus وAsterisk.",
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
            subtitle: 'مبرمج · قواعد بيانات SQL',
            experience_label: 'الخبرة الحالية',
            experience_title: 'البرمجة وقواعد بيانات SQL',
            experience_text: 'أعمل مبرمجاً مع قاعدة بيانات مركز اتصال.',
            reporting: 'إعداد التقارير باستخدام SQL',
            maintenance: 'مهام صيانة قواعد البيانات',
            environment_title: 'بيئة العمل',
            environment_text: 'تستخدم بيئة العمل نظام CRM Octopus وAsterisk.',
            skills_context: 'تقنيات من مسيرتي التعليمية ومشاريعي، منفصلة عن عملي الحالي باستخدام SQL.',
            story_title: 'من التعامل مع الأشخاص إلى العمل مع البيانات',
            story_transfer: 'خبرتي التجارية جزء من مسيرتي ومن طريقتي في التواصل وفهم احتياجات الآخرين.',
            story_learning: 'أواصل توسيع معرفتي بلغة Python وClickHouse والذكاء الاصطناعي المتقدم لمواصلة تطوري المهني.',
            background_title: 'قصتي',
            background_text: 'تشمل مسيرتي خبرة في مبيعات B2B وخدمة العملاء. أعمل اليوم مبرمجاً مع قاعدة بيانات مركز اتصال.',
            skills_title: 'تقنيات في مسيرتي',
            download_cv: 'تحميل السيرة الذاتية',
            soft_skills_title: 'المهارات الشخصية'
        },
        // Projects Page
        projects: {
            polaris_source: "عرض المستودع",
            case_label: "دراسة حالة / التعلم",
            case_title: "Polaris: مشروع للتعلم",
            case_goal_title: "الهدف",
            case_goal: "استكشاف التطوير بمساعدة الذكاء الاصطناعي وتعلم Next.js، وهو إطار عمل لـ React، من خلال تطبيق للتسويق وإدارة علاقات العملاء.",
            case_contribution_title: "مساهمتي",
            case_contribution: "طورت Polaris بشكل فردي، بمساعدة الذكاء الاصطناعي، بوصفه مشروعاً شخصياً للتعلم.",
            case_workflow_title: "التعلم والمنهج",
            case_workflow: "تعلمت عن SDD وTDD مع Gentleman Programming. يتضمن المستودع مواصفات ومهام تتبنى نهج الاختبارات أولاً.",
            case_behavior_title: "سلوك محدد تحت الاختبار",
            case_behavior: "تغطي الاختبارات تغيير مرحلة عميل محتمل وإنشاء نشاطه. وتتحقق أيضاً من أن الإبقاء على المرحلة نفسها لا يغير بيانات العميل المحتمل ولا ينشئ أي نشاط.",
            case_spec_link: "عرض مواصفة SDD",
            case_test_link: "عرض اختبار الوحدة",
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
            title: 'تواصل مهني',
            subtitle: 'لنتحدث عن الفرص في البرمجة وقواعد البيانات',
            availability: 'مهتم بالفرص المهنية المرتبطة بالبرمجة وقواعد البيانات.',
            form_title: 'أرسل لي رسالة',
            name_label: 'الاسم',
            name_placeholder: 'اسمك',
            email_label: 'البريد الإلكتروني',
            email_placeholder: 'your@email.com',
            message_label: 'الرسالة',
            message_placeholder: 'أخبرني عن الفرصة أو الوظيفة...',
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

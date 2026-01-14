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
            title: 'Hamza Laouzi',
            subtitle: "💼 Del Mundo Ventas al Desarrollo Web",
            description: 'Soy un desarrollador web con un historial sólido en ventas B2B y atención al cliente. Utilizo mi experiencia entendiendo las necesidades del usuario para construir software que no solo funciona, sino que resuelve problemas reales.',
            cta_projects: 'Ver Proyectos',
            cta_contact: 'Contactar',
            skills_title: 'Habilidades Técnicas',
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
            made_with: 'Hecho con',
            by: 'por'
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
            title: 'Hamza Laouzi',
            subtitle: '💼 From Sales to Web Development',
            description: 'I am a web developer with a solid background in B2B sales and customer service. I use my experience understanding user needs to build software that not only works, but solves real problems.',
            cta_projects: 'View Projects',
            cta_contact: 'Get in Touch',
            skills_title: 'Technical Skills',
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
            made_with: 'Made with',
            by: 'by'
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
            title: 'Hamza Laouzi',
            subtitle: '💼 Du Monde des Ventes au Développement Web',
            description: 'Je suis un développeur web avec une solide expérience en ventes B2B et service client. J\'utilise mon expérience pour comprendre les besoins des utilisateurs et créer des logiciels qui non seulement fonctionnent, mais résolvent de vrais problèmes.',
            cta_projects: 'Voir les Projets',
            cta_contact: 'Me Contacter',
            skills_title: 'Compétences Techniques',
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
            made_with: 'Fait avec',
            by: 'par'
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
            title: 'حمزة العوزي',
            subtitle: '💼 من عالم الأعمال إلى تطوير الويب',
            description: 'أنا مطور ويب ذو خلفية قوية في مبيعات B2B وخدمة العملاء. أستخدم خبرتي في فهم احتياجات المستخدم لبناء برامج لا تعمل فحسب، بل تحل مشاكل حقيقية.',
            cta_projects: 'عرض المشاريع',
            cta_contact: 'تواصل معي',
            skills_title: 'المهارات التقنية',
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
            made_with: 'صنع بـ',
            by: 'بواسطة'
        }
    }
};

// Export for use in i18n.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}

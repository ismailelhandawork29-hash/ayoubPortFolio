import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<Language>('fr');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: any = {
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        experience: 'Expérience',
        education: 'Formation',
        projects: 'Projets',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Salut, je suis',
        titles: [
          'Développeur Full Stack',
          'Expert en Angular & React',
          'Architecte Logiciel',
          'Passionné d\'Innovation'
        ],
        description: 'Passionné par le développement web et mobile, je crée des expériences numériques innovantes et performantes. Disponible pour un CDI à partir de mars 2026.',
        contactBtn: 'Me contacter',
        learnMoreBtn: 'En savoir plus'
      },
      about: {
        title: 'À propos de moi',
        intro: 'Développeur Full Stack passionné par l\'innovation technologique, je crée des expériences numériques qui allient performance, esthétique et fonctionnalité. Fort d\'une expertise en développement web et mobile, je transforme des idées complexes en solutions élégantes et scalables.',
        paragraph1: 'Diplômé Expert en Ingénierie Informatique de l\'ESGI Paris, j\'ai acquis une maîtrise approfondie des technologies modernes, de l\'architecture logicielle aux pratiques DevOps. Mon parcours m\'a permis de mener à bien des projets ambitieux, de la conception à la mise en production, en passant par l\'optimisation continue.',
        paragraph2: 'Actuellement en recherche d\'un CDI à partir de mars 2026, je souhaite rejoindre une équipe dynamique où je pourrai apporter mon expertise technique, ma créativité et ma passion pour l\'excellence. Toujours en veille technologique, je suis prêt à relever de nouveaux défis et à contribuer à des projets innovants qui ont un impact réel.',
        locationLabel: 'Localisation',
        locationValue: 'Paris, France',
        availabilityLabel: 'Disponibilité',
        availabilityValue: 'CDI à partir de mars 2026',
        languagesTitle: 'Langues',
        interestsTitle: 'Centres d\'intérêt',
        languages: {
          french: { name: 'Français', level: 'Langue maternelle' },
          arabic: { name: 'Arabe', level: 'Langue maternelle' },
          english: { name: 'Anglais', level: 'Professionnel' }
        },
        interests: {
          tech: 'Veille Technologique',
          sports: 'Sport & Fitness',
          travel: 'Voyages',
          reading: 'Lecture'
        }
      },
      skills: {
        title: 'Compétences',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          programming: 'Programmation',
          mobile: 'Mobile',
          ai: 'Intelligence Artificielle & Automatisation',
          database: 'Bases de données',
          devops: 'DevOps & Déploiement',
          cms: 'CMS & E-commerce',
          soft: 'Compétences transverses'
        }
      },
      experience: {
        title: 'Expériences professionnelles'
      },
      education: {
        title: 'Diplômes et Formations'
      },
      projects: {
        title: 'Projets Réalisés',
        viewProject: 'Voir le projet',
        technologies: 'Technologies'
      },
      contact: {
        title: 'Contactez-moi',
        subtitle: 'Disponible pour de nouvelles opportunités',
        description: 'Je suis disponible pour un CDI à partir de mars 2026. N\'hésitez pas à me contacter pour discuter de vos projets !',
        emailLabel: 'Email',
        phoneLabel: 'Téléphone',
        locationLabel: 'Localisation',
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre.email@example.com',
        subjectLabel: 'Sujet',
        subjectPlaceholder: 'Sujet de votre message',
        messageLabel: 'Message',
        messagePlaceholder: 'Votre message...',
        sendBtn: 'Envoyer le message',
        sendingBtn: 'Envoi en cours...',
        sendBtnMobile: 'Envoyer',
        sendingBtnMobile: 'Envoi...',
        messageBtn: 'Message',
        callBtn: 'Appeler'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m',
        titles: [
          'Full Stack Developer',
          'Angular & React Expert',
          'Software Architect',
          'Innovation Enthusiast'
        ],
        description: 'Passionate about web and mobile development, I create innovative and high-performance digital experiences. Available for a permanent position from March 2026.',
        contactBtn: 'Contact me',
        learnMoreBtn: 'Learn more'
      },
      about: {
        title: 'About Me',
        intro: 'Full Stack Developer passionate about technological innovation, I create digital experiences that combine performance, aesthetics, and functionality. With expertise in web and mobile development, I transform complex ideas into elegant and scalable solutions.',
        paragraph1: 'Graduate with an Expert degree in Computer Engineering from ESGI Paris, I have acquired in-depth mastery of modern technologies, from software architecture to DevOps practices. My journey has allowed me to successfully complete ambitious projects, from design to production, including continuous optimization.',
        paragraph2: 'Currently looking for a permanent position from March 2026, I wish to join a dynamic team where I can bring my technical expertise, creativity, and passion for excellence. Always keeping up with technology, I am ready to take on new challenges and contribute to innovative projects that have a real impact.',
        locationLabel: 'Location',
        locationValue: 'Paris, France',
        availabilityLabel: 'Availability',
        availabilityValue: 'Permanent position from March 2026',
        languagesTitle: 'Languages',
        interestsTitle: 'Interests',
        languages: {
          french: { name: 'French', level: 'Native' },
          arabic: { name: 'Arabic', level: 'Native' },
          english: { name: 'English', level: 'Professional' }
        },
        interests: {
          tech: 'Tech Watch',
          sports: 'Sports & Fitness',
          travel: 'Travel',
          reading: 'Reading'
        }
      },
      skills: {
        title: 'Skills',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          programming: 'Programming',
          mobile: 'Mobile',
          ai: 'Artificial Intelligence & Automation',
          database: 'Databases',
          devops: 'DevOps & Deployment',
          cms: 'CMS & E-commerce',
          soft: 'Soft Skills'
        }
      },
      experience: {
        title: 'Professional Experience'
      },
      education: {
        title: 'Degrees and Education'
      },
      projects: {
        title: 'Completed Projects',
        viewProject: 'View project',
        technologies: 'Technologies'
      },
      contact: {
        title: 'Contact Me',
        subtitle: 'Available for new opportunities',
        description: 'I am available for a permanent position from March 2026. Feel free to contact me to discuss your projects!',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        locationLabel: 'Location',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Subject of your message',
        messageLabel: 'Message',
        messagePlaceholder: 'Your message...',
        sendBtn: 'Send message',
        sendingBtn: 'Sending...',
        sendBtnMobile: 'Send',
        sendingBtnMobile: 'Sending...',
        messageBtn: 'Message',
        callBtn: 'Call'
      }
    }
  };

  constructor() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      this.currentLanguage.next(savedLang);
    }
  }

  setLanguage(lang: Language) {
    this.currentLanguage.next(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  getLanguage(): Language {
    return this.currentLanguage.value;
  }

  translate(key: string): any {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage.value];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  }
}

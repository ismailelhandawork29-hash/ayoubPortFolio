import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  context: string;
  objective: string;
  achievements: string[];
  result: string;
  skills: string[];
  technicalSkills?: string[];
  images?: string[];
  currentSlide?: number;
  logo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  selectedProject: Project | null = null;
  private langSubscription: Subscription | undefined;
  private autoSlideInterval: any;
  private cardAutoSlideIntervals: Map<number, any> = new Map();
  isAutoSliding = true;

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    this.updateContent();
    
    // Start auto-slide for all card images
    setTimeout(() => {
      this.startAllCardAutoSlides();
    }, 500);
    
    // Subscribe to language changes
    this.langSubscription = this.translationService.currentLanguage$.subscribe(() => {
      this.updateContent();
      // Restart card auto-slides
      this.stopAllCardAutoSlides();
      setTimeout(() => {
        this.startAllCardAutoSlides();
      }, 500);
      // Close modal if open when language changes
      if (this.selectedProject) {
        const projectId = this.selectedProject.id;
        this.closeModal();
        // Reopen with updated content
        setTimeout(() => {
          const updatedProject = this.projects.find(p => p.id === projectId);
          if (updatedProject) {
            this.openProject(updatedProject);
          }
        }, 100);
      }
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
    this.stopAutoSlide();
    this.stopAllCardAutoSlides();
  }

  updateContent() {
    const currentLang = this.translationService.getLanguage();
    this.projects = currentLang === 'fr' ? this.getProjectsFr() : this.getProjectsEn();
  }

  getProjectsFr(): Project[] {
    return [
      {
        id: 1,
        title: 'Réunir',
        subtitle: 'Plateforme SaaS de référencement événementiel B2B',
        url: 'https://www.reunir.com/',
        context: 'Réunir est une plateforme dédiée aux professionnels de l\'événementiel (séminaires, congrès, réunions, team-building). L\'ancienne version du site ne répondait plus aux besoins techniques et fonctionnels, ce qui a conduit à une refonte complète de la plateforme.',
        objective: 'Créer une plateforme moderne permettant la mise en relation entre organisateurs d\'événements et établissements, la gestion centralisée des contenus, l\'autonomie des clients dans la gestion de leurs fiches, et un contrôle qualité via des workflows internes.',
        achievements: [
          'Participation à la conception globale de la plateforme',
          'Développement d\'un site public avec moteur de recherche multicritères (lieu, capacité, type d\'événement, catégorie)',
          'Création de fiches établissements avec demandes de devis',
          'Développement d\'un espace client pour gérer fiches, demandes et promotions',
          'Création d\'un back-office administrateur (validation, modération, workflows)',
          'Mise en place d\'un système de statuts, notifications et processus de validation',
          'Configuration des environnements techniques et participation aux pratiques DevOps',
          'Travail sur une architecture séparant frontend et backend via API'
        ],
        result: 'Une plateforme SaaS plus performante, évolutive et adaptée aux usages B2B, améliorant l\'expérience utilisateur, l\'autonomie des établissements et le contrôle qualité par les équipes internes.',
        skills: [
          'Développement fullstack',
          'Architecture web & API REST',
          'Gestion des rôles et permissions',
          'DevOps & déploiement',
          'UX orientée métier'
        ],
        technicalSkills: [
          'TypeScript',
          'React',
          'Node.js',
          'PostgreSQL',
          'WebSocket',
          'Intégration d\'APIs et services externes'
        ],
        images: [
          'assets/images/reunir/reunir-1.png',
          'assets/images/reunir/reunir-2.png',
          'assets/images/reunir/reunir-3.png'
        ],
        currentSlide: 0
      },
      {
        id: 2,
        title: 'Values & Co',
        subtitle: 'Site e-commerce de cadeaux d\'entreprise personnalisés',
        url: 'https://valuesandco.com/',
        context: 'Le Groupe Réunir souhaitait développer une activité e-commerce complémentaire dédiée aux cadeaux d\'affaires et solutions personnalisées pour les entreprises.',
        objective: 'Créer un site e-commerce fonctionnel et personnalisable, aligné avec l\'identité de la marque, et optimisé pour la visibilité et le référencement.',
        achievements: [
          'Participation à la création complète du site sous Shopify',
          'Personnalisation du thème graphique selon l\'identité de la marque',
          'Adaptation des fonctionnalités e-commerce (catalogue, fiches produits, parcours client)',
          'Configuration technique orientée SEO (structure des pages, performances, bonnes pratiques de référencement)',
          'Paramétrage des contenus et outils de gestion'
        ],
        result: 'Un site e-commerce opérationnel, personnalisable et mieux référencé, permettant la vente de cadeaux d\'entreprise, la valorisation de produits à valeur ajoutée, et une meilleure visibilité en ligne.',
        skills: [
          'E-commerce',
          'Shopify',
          'UX e-commerce',
          'SEO technique',
          'Intégration de thème',
          'Configuration produit'
        ],
        images: [
          'assets/images/values-and-co/values-1.png',
          'assets/images/values-and-co/values-2.png'
        ],
        currentSlide: 0
      },
      {
        id: 3,
        title: 'IZZZI',
        subtitle: 'Application Web Full-Stack avec Docker Swarm et Haute Disponibilité',
        url: 'https://github.com/Ayoub-ELHanda',
        context: 'IZZZI est un projet académique de 5ème année en Ingénierie du Web à l\'ESGI. Développé en équipe de 4 personnes, le projet consiste à créer une application web déployable et scalable. L\'objectif était de concevoir une architecture résiliente, haute disponibilité, en utilisant Docker Swarm, incluant load balancing, scaling automatique et gestion d\'incidents.',
        objective: 'Créer une stack applicative complète et déployable (MERN ou autre), capable de supporter des charges importantes, de gérer la haute disponibilité, et d\'assurer la continuité de service en cas de panne. Le projet devait intégrer des fonctionnalités avancées comme la mise à jour continue (rolling update), la tolérance aux pannes (fault tolerance), et la gestion de plusieurs instances d\'application et de base de données.',
        achievements: [
          'Développement d\'une application Full-Stack (Frontend, Backend, Base de données)',
          'Mise en place d\'un reverse proxy (Traefik) avec load balancing',
          'Configuration de Docker Swarm pour orchestration et scaling',
          'Gestion de la haute disponibilité (réplication de services)',
          'Mise en place d\'un système de rolling updates sans interruption de service',
          'Configuration de la persistance des données avec Docker volumes',
          'Tests de charge et de résilience (kill de conteneurs, scaling)',
          'Implémentation de health checks et récupération automatique',
          'Déploiement d\'une stack complète avec plusieurs réplicas (frontend, backend, DB)',
          'Travail collaboratif en équipe avec versioning Git'
        ],
        result: 'Une application web performante, scalable et résiliente, déployée sur Docker Swarm. Le système supporte plusieurs instances simultanées, répartit automatiquement la charge, maintient le service en ligne en cas de panne d\'un conteneur, et permet des mises à jour progressives sans interruption. Le projet démontre une maîtrise approfondie de l\'orchestration de conteneurs, de la haute disponibilité et des pratiques DevOps avancées.',
        skills: [
          'Architecture distribuée',
          'DevOps avancé',
          'Docker Swarm',
          'Haute disponibilité',
          'Load Balancing',
          'Travail d\'équipe'
        ],
        technicalSkills: [
          'Docker & Docker Swarm',
          'Traefik (Reverse Proxy)',
          'MongoDB (Réplication)',
          'Node.js / Express',
          'React / Angular',
          'CI/CD',
          'Health Checks',
          'Rolling Updates',
          'Volumes & Persistance',
          'Load Balancing'
        ],
        images: [
          'assets/images/IZZZI/IZZZI-1.png',
          'assets/images/IZZZI/IZZZI-2.png',
          'assets/images/IZZZI/IZZZI-3.png'
        ],
        currentSlide: 0
      },
      {
        id: 4,
        title: 'CCUSI',
        subtitle: 'Site e-commerce de minéraux et pierres précieuses B2B',
        url: 'https://www.ccusi.com/',
        context: 'CCUSI est une entreprise spécialisée dans la vente en ligne de minéraux et pierres précieuses à destination des professionnels. Le site existant nécessitait une refonte complète pour améliorer l\'expérience utilisateur, moderniser l\'interface, et optimiser les fonctionnalités e-commerce.',
        objective: 'Créer un site e-commerce moderne et performant, adapté aux besoins du commerce B2B de minéraux, avec une interface intuitive, un catalogue structuré, et des fonctionnalités avancées de gestion de commandes et de clients.',
        achievements: [
          'Développement complet du site sous Shopify',
          'Création d\'un design moderne et professionnel',
          'Structuration du catalogue produits (catégories, filtres, recherche)',
          'Développement des fonctionnalités de commande pour clients B2B',
          'Mise en place d\'un système de gestion des comptes clients professionnels',
          'Optimisation des performances et du référencement',
          'Intégration de solutions de paiement sécurisées',
          'Configuration des workflows de commande et de livraison'
        ],
        result: 'Un site e-commerce professionnel et performant, offrant une expérience d\'achat optimisée pour les clients B2B, avec une gestion complète du catalogue, des commandes et des clients, et une interface moderne valorisant les produits.',
        skills: [
          'E-commerce B2B',
          'Shopify Development',
          'UX/UI Design',
          'Gestion de catalogue',
          'Optimisation SEO',
          'Paiements en ligne'
        ],
        technicalSkills: [
          'Shopify',
          'Liquid Template Language',
          'JavaScript',
          'CSS/SCSS',
          'Shopify API',
          'Responsive Design',
          'SEO Technique',
          'Google Analytics'
        ],
        images: [
          'assets/images/ccusi/ccusi-1.png',
          'assets/images/ccusi/ccusi-2.png'
        ],
        currentSlide: 0
      },
      {
        id: 5,
        title: 'DANAYA LUX',
        subtitle: 'Application Mobile E-commerce connectée à Shopify',
        url: 'https://www.danaya-lux.com/',
        context: 'DANAYA LUX est une boutique en ligne spécialisée dans la vente de minéraux et bijoux. L\'entreprise souhaitait étendre sa présence sur mobile en développant une application native pour iOS et Android, entièrement synchronisée avec sa boutique Shopify existante.',
        objective: 'Développer une application mobile complète pour iOS et Android, connectée en temps réel avec le store Shopify, permettant aux clients de parcourir le catalogue, passer des commandes, et suivre leurs achats directement depuis leur smartphone.',
        achievements: [
          'Développement d\'une application mobile avec React Native et Expo',
          'Intégration complète de l\'API Shopify pour la synchronisation des données',
          'Développement du système de gestion des commandes en temps réel',
          'Mise en place de la gestion des utilisateurs et des comptes clients',
          'Implémentation du suivi de commandes avec notifications',
          'Synchronisation bidirectionnelle entre l\'application mobile et le store Shopify',
          'Création d\'une interface utilisateur intuitive et responsive',
          'Intégration de solutions de paiement sécurisées',
          'Optimisation des performances pour iOS et Android',
          'Gestion complète du catalogue produits (minéraux et bijoux)'
        ],
        result: 'Une application mobile professionnelle disponible sur iOS et Android, entièrement synchronisée avec la boutique Shopify CCUSI. L\'application offre une expérience d\'achat mobile complète avec gestion des commandes, suivi en temps réel, et synchronisation automatique de toutes les données entre la boutique en ligne et l\'application mobile.',
        skills: [
          'Développement Mobile',
          'Architecture API REST',
          'Intégration Shopify',
          'E-commerce Mobile',
          'Gestion de données',
          'Publication d\'applications'
        ],
        technicalSkills: [
          'React Native',
          'Expo',
          'Shopify API',
          'API REST',
          'iOS Development',
          'Android Development',
          'JavaScript/TypeScript',
          'Shopify Extensions',
          'State Management',
          'Mobile UI/UX',
          'Push Notifications',
          'Paiements mobiles'
        ],
        images: [
          'assets/images/DANAYA-LUX/DANAYA-1.png',
          'assets/images/DANAYA-LUX/DANAYA-2.png',
          'assets/images/DANAYA-LUX/DANAYA-3.png',
          'assets/images/DANAYA-LUX/DANAYA-4.png',
          'assets/images/DANAYA-LUX/DANAYA-5.png'
        ],
        currentSlide: 0
      },
      {
        id: 6,
        title: 'CRM Intelligent',
        subtitle: 'CRM Intelligent avec Automatisation IA - LLMs, n8n & Workflows',
        url: 'https://github.com/Ayoub-ELHanda',
        context: 'Find Your Course est un projet académique de 5ème année en Ingénierie du Web à l\'ESGI, réalisé en équipe avec Rashmi Bhavsar, Yannick Lema et Sharan Vijeyaruban. Le projet vise à automatiser un CRM grâce aux LLMs (Large Language Models) et aux workflows, en réponse à l\'explosion des canaux numériques et à la surcharge du traitement humain en 2025.',
        objective: 'Créer un mini-CRM intelligent automatisé qui transforme le texte non structuré (messages, emails) en données exploitables, déclenche des actions automatiques dans le CRM, et intègre les LLMs pour enrichir l\'analyse et la prise de décision. Développer également un cours complet sur l\'automatisation et l\'IA pour former les utilisateurs.',
        achievements: [
          'Développement d\'un Chatbot Intelligent connecté au CRM avec IA',
          'Création de workflows automatisés avec n8n (demande → analyse → ticket → action)',
          'Intégration de LLMs (ChatGPT, Ollama, CrewAI) pour l\'analyse de texte',
          'Transformation automatique de texte non structuré en données CRM exploitables',
          'Développement Frontend avec React 18 + TypeScript + Vite',
          'Interface utilisateur moderne avec Tailwind CSS et Material-UI',
          'Architecture Full-Stack en trois tiers (présentation, logique métier, données)',
          'Création d\'un cours complet sur l\'automatisation (4 sections + évaluations)',
          'Développement de tests de positionnement et exercices pratiques',
          'Mise en place de la traçabilité complète des workflows via n8n',
          'Implémentation du mécanisme d\'attention (self-attention) des LLMs',
          'Création d\'une démonstration fonctionnelle complète du système'
        ],
        result: 'Un système CRM intelligent et automatisé qui réduit drastiquement le temps de traitement des demandes, offre des réponses plus homogènes, et assure une traçabilité complète. Le projet inclut également un cours pédagogique complet avec vidéos, exercices et évaluations, permettant de former d\'autres équipes à l\'automatisation et à l\'IA appliquée aux CRM.',
        skills: [
          'Intelligence Artificielle',
          'Automatisation & Workflows',
          'Architecture Full-Stack',
          'Développement Chatbot',
          'Pédagogie & Formation',
          'Travail d\'équipe'
        ],
        technicalSkills: [
          'LLMs (ChatGPT, Ollama, CrewAI)',
          'n8n (Workflow Automation)',
          'React 18',
          'TypeScript',
          'Vite',
          'Tailwind CSS',
          'Material-UI',
          'API REST',
          'Webhooks',
          'Natural Language Processing',
          'Self-Attention Mechanisms',
          'Three-tier Architecture'
        ],
        images: [
          'assets/images/CRM/CRM-1.png',
          'assets/images/CRM/CRM-2.png'
        ],
        currentSlide: 0
      }
    ];
  }

  getProjectsEn(): Project[] {
    return [
      {
        id: 1,
        title: 'Réunir',
        subtitle: 'B2B Event Referencing SaaS Platform',
        url: 'https://www.reunir.com/',
        context: 'Réunir is a platform dedicated to event professionals (seminars, conferences, meetings, team-building). The old version of the site no longer met technical and functional needs, which led to a complete platform redesign.',
        objective: 'Create a modern platform enabling connection between event organizers and venues, centralized content management, client autonomy in managing their listings, and quality control via internal workflows.',
        achievements: [
          'Participation in overall platform design',
          'Development of a public site with multi-criteria search engine (location, capacity, event type, category)',
          'Creation of venue listings with quote requests',
          'Development of a client area to manage listings, requests and promotions',
          'Creation of an administrator back-office (validation, moderation, workflows)',
          'Implementation of status system, notifications and validation processes',
          'Configuration of technical environments and participation in DevOps practices',
          'Work on architecture separating frontend and backend via API'
        ],
        result: 'A more efficient, scalable SaaS platform adapted to B2B uses, improving user experience, venue autonomy and quality control by internal teams.',
        skills: [
          'Full Stack Development',
          'Web Architecture & API REST',
          'Role and Permission Management',
          'DevOps & Deployment',
          'Business-oriented UX'
        ],
        technicalSkills: [
          'TypeScript',
          'React',
          'Node.js',
          'PostgreSQL',
          'WebSocket',
          'APIs and External Services Integration'
        ],
        images: [
          'assets/images/reunir/reunir-1.png',
          'assets/images/reunir/reunir-2.png',
          'assets/images/reunir/reunir-3.png'
        ],
        currentSlide: 0
      },
      {
        id: 2,
        title: 'Values & Co',
        subtitle: 'E-commerce Site for Customized Corporate Gifts',
        url: 'https://valuesandco.com/',
        context: 'Groupe Réunir wanted to develop a complementary e-commerce activity dedicated to corporate gifts and customized solutions for businesses.',
        objective: 'Create a functional and customizable e-commerce site, aligned with brand identity, and optimized for visibility and SEO.',
        achievements: [
          'Participation in complete site creation on Shopify',
          'Customization of graphic theme according to brand identity',
          'Adaptation of e-commerce features (catalog, product pages, customer journey)',
          'SEO-oriented technical configuration (page structure, performance, SEO best practices)',
          'Content and management tools configuration'
        ],
        result: 'An operational, customizable and better-referenced e-commerce site, enabling the sale of corporate gifts, showcasing value-added products, and better online visibility.',
        skills: [
          'E-commerce',
          'Shopify',
          'E-commerce UX',
          'Technical SEO',
          'Theme Integration',
          'Product Configuration'
        ],
        images: [
          'assets/images/values-and-co/values-1.png',
          'assets/images/values-and-co/values-2.png'
        ],
        currentSlide: 0
      },
      {
        id: 3,
        title: 'IZZZI',
        subtitle: 'Full-Stack Web Application with Docker Swarm and High Availability',
        url: 'https://github.com/Ayoub-ELHanda',
        context: 'IZZZI is a 5th year academic project in Web Engineering at ESGI. Developed by a team of 4 people, the project consists of creating a deployable and scalable web application. The goal was to design a resilient, high availability architecture, using Docker Swarm, including load balancing, automatic scaling and incident management.',
        objective: 'Create a complete and deployable application stack (MERN or other), capable of supporting heavy loads, managing high availability, and ensuring service continuity in case of failure. The project had to integrate advanced features such as rolling updates, fault tolerance, and management of multiple application and database instances.',
        achievements: [
          'Development of a Full-Stack application (Frontend, Backend, Database)',
          'Implementation of a reverse proxy (Traefik) with load balancing',
          'Configuration of Docker Swarm for orchestration and scaling',
          'High availability management (service replication)',
          'Implementation of rolling updates without service interruption',
          'Configuration of data persistence with Docker volumes',
          'Load and resilience testing (container kill, scaling)',
          'Implementation of health checks and automatic recovery',
          'Deployment of a complete stack with multiple replicas (frontend, backend, DB)',
          'Collaborative teamwork with Git versioning'
        ],
        result: 'A high-performance, scalable and resilient web application, deployed on Docker Swarm. The system supports multiple simultaneous instances, automatically distributes the load, maintains the service online in case of container failure, and allows progressive updates without interruption. The project demonstrates in-depth mastery of container orchestration, high availability and advanced DevOps practices.',
        skills: [
          'Distributed Architecture',
          'Advanced DevOps',
          'Docker Swarm',
          'High Availability',
          'Load Balancing',
          'Teamwork'
        ],
        technicalSkills: [
          'Docker & Docker Swarm',
          'Traefik (Reverse Proxy)',
          'MongoDB (Replication)',
          'Node.js / Express',
          'React / Angular',
          'CI/CD',
          'Health Checks',
          'Rolling Updates',
          'Volumes & Persistence',
          'Load Balancing'
        ],
        images: [
          'assets/images/IZZZI/IZZZI-1.png',
          'assets/images/IZZZI/IZZZI-2.png',
          'assets/images/IZZZI/IZZZI-3.png'
        ],
        currentSlide: 0
      },
      {
        id: 4,
        title: 'CCUSI',
        subtitle: 'B2B E-commerce Site for Minerals and Precious Stones',
        url: 'https://www.ccusi.com/',
        context: 'CCUSI is a company specializing in the online sale of minerals and precious stones to professionals. The existing site required a complete redesign to improve user experience, modernize the interface, and optimize e-commerce features.',
        objective: 'Create a modern and efficient e-commerce site, adapted to the needs of B2B mineral trade, with an intuitive interface, structured catalog, and advanced order and customer management features.',
        achievements: [
          'Complete site development on Shopify',
          'Creation of a modern and professional design',
          'Structuring of product catalog (categories, filters, search)',
          'Development of ordering features for B2B customers',
          'Implementation of professional customer account management system',
          'Performance and SEO optimization',
          'Integration of secure payment solutions',
          'Configuration of order and delivery workflows'
        ],
        result: 'A professional and efficient e-commerce site, offering an optimized shopping experience for B2B customers, with complete catalog, order and customer management, and a modern interface showcasing products.',
        skills: [
          'B2B E-commerce',
          'Shopify Development',
          'UX/UI Design',
          'Catalog Management',
          'SEO Optimization',
          'Online Payments'
        ],
        technicalSkills: [
          'Shopify',
          'Liquid Template Language',
          'JavaScript',
          'CSS/SCSS',
          'Shopify API',
          'Responsive Design',
          'Technical SEO',
          'Google Analytics'
        ],
        images: [
          'assets/images/ccusi/ccusi-1.png',
          'assets/images/ccusi/ccusi-2.png'
        ],
        currentSlide: 0
      },
      {
        id: 5,
        title: 'DANAYA LUX',
        subtitle: 'E-commerce Mobile Application Connected to Shopify',
        url: 'https://www.danaya-lux.com/',
        context: 'DANAYA LUX is an online store specializing in the sale of minerals and jewelry. The company wanted to extend its mobile presence by developing a native application for iOS and Android, fully synchronized with its existing Shopify store.',
        objective: 'Develop a complete mobile application for iOS and Android, connected in real-time with the Shopify store, allowing customers to browse the catalog, place orders, and track their purchases directly from their smartphone.',
        achievements: [
          'Development of a mobile application with React Native and Expo',
          'Complete integration of Shopify API for data synchronization',
          'Development of real-time order management system',
          'Implementation of user and customer account management',
          'Implementation of order tracking with notifications',
          'Bidirectional synchronization between mobile app and Shopify store',
          'Creation of an intuitive and responsive user interface',
          'Integration of secure payment solutions',
          'Performance optimization for iOS and Android',
          'Complete product catalog management (minerals and jewelry)'
        ],
        result: 'A professional mobile application available on iOS and Android, fully synchronized with the CCUSI Shopify store. The application offers a complete mobile shopping experience with order management, real-time tracking, and automatic data synchronization between the online store and mobile application.',
        skills: [
          'Mobile Development',
          'REST API Architecture',
          'Shopify Integration',
          'Mobile E-commerce',
          'Data Management',
          'App Publishing'
        ],
        technicalSkills: [
          'React Native',
          'Expo',
          'Shopify API',
          'REST API',
          'iOS Development',
          'Android Development',
          'JavaScript/TypeScript',
          'Shopify Extensions',
          'State Management',
          'Mobile UI/UX',
          'Push Notifications',
          'Mobile Payments'
        ],
        images: [
          'assets/images/DANAYA-LUX/DANAYA-1.png',
          'assets/images/DANAYA-LUX/DANAYA-2.png',
          'assets/images/DANAYA-LUX/DANAYA-3.png',
          'assets/images/DANAYA-LUX/DANAYA-4.png',
          'assets/images/DANAYA-LUX/DANAYA-5.png'
        ],
        currentSlide: 0
      },
      {
        id: 6,
        title: 'Intelligent CRM',
        subtitle: 'Intelligent CRM with AI Automation - LLMs, n8n & Workflows',
        url: 'https://github.com/Ayoub-ELHanda',
        context: 'Find Your Course is a 5th year academic project in Web Engineering at ESGI, carried out in a team with Rashmi Bhavsar, Yannick Lema and Sharan Vijeyaruban. The project aims to automate a CRM using LLMs (Large Language Models) and workflows, in response to the explosion of digital channels and the overload of human processing in 2025.',
        objective: 'Create an automated intelligent mini-CRM that transforms unstructured text (messages, emails) into exploitable data, triggers automatic actions in the CRM, and integrates LLMs to enrich analysis and decision-making. Also develop a complete course on automation and AI to train users.',
        achievements: [
          'Development of an Intelligent Chatbot connected to CRM with AI',
          'Creation of automated workflows with n8n (request → analysis → ticket → action)',
          'Integration of LLMs (ChatGPT, Ollama, CrewAI) for text analysis',
          'Automatic transformation of unstructured text into exploitable CRM data',
          'Frontend development with React 18 + TypeScript + Vite',
          'Modern user interface with Tailwind CSS and Material-UI',
          'Three-tier Full-Stack architecture (presentation, business logic, data)',
          'Creation of a complete course on automation (4 sections + assessments)',
          'Development of placement tests and practical exercises',
          'Implementation of complete workflow traceability via n8n',
          'Implementation of LLM attention mechanism (self-attention)',
          'Creation of a complete functional system demonstration'
        ],
        result: 'An intelligent and automated CRM system that drastically reduces request processing time, offers more homogeneous responses, and ensures complete traceability. The project also includes a complete educational course with videos, exercises and assessments, enabling other teams to train in automation and AI applied to CRM.',
        skills: [
          'Artificial Intelligence',
          'Automation & Workflows',
          'Full-Stack Architecture',
          'Chatbot Development',
          'Pedagogy & Training',
          'Teamwork'
        ],
        technicalSkills: [
          'LLMs (ChatGPT, Ollama, CrewAI)',
          'n8n (Workflow Automation)',
          'React 18',
          'TypeScript',
          'Vite',
          'Tailwind CSS',
          'Material-UI',
          'REST API',
          'Webhooks',
          'Natural Language Processing',
          'Self-Attention Mechanisms',
          'Three-tier Architecture'
        ],
        images: [
          'assets/images/CRM/CRM-1.png',
          'assets/images/CRM/CRM-2.png'
        ],
        currentSlide: 0
      }
    ];
  }

  projects: Project[] = [];

  nextSlide(project: Project): void {
    if (project.images && project.currentSlide !== undefined) {
      project.currentSlide = (project.currentSlide + 1) % project.images.length;
    }
  }

  prevSlide(project: Project): void {
    if (project.images && project.currentSlide !== undefined) {
      project.currentSlide = project.currentSlide === 0 
        ? project.images.length - 1 
        : project.currentSlide - 1;
    }
  }

  goToSlide(project: Project, index: number): void {
    if (project.currentSlide !== undefined) {
      project.currentSlide = index;
    }
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    this.startAutoSlide();
  }

  closeModal(): void {
    this.stopAutoSlide();
    this.selectedProject = null;
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  startAutoSlide(): void {
    this.stopAutoSlide(); // Clear any existing interval
    this.isAutoSliding = true;
    this.autoSlideInterval = setInterval(() => {
      if (this.selectedProject && this.isAutoSliding) {
        this.nextSlide(this.selectedProject);
      }
    }, 4000); // Change slide every 4 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  pauseAutoSlide(): void {
    this.isAutoSliding = false;
  }

  resumeAutoSlide(): void {
    this.isAutoSliding = true;
  }

  // Card auto-slide methods
  startAllCardAutoSlides(): void {
    this.projects.forEach(project => {
      if (project.images && project.images.length > 1) {
        this.startCardAutoSlide(project);
      }
    });
  }

  startCardAutoSlide(project: Project): void {
    // Stop existing interval for this project
    if (this.cardAutoSlideIntervals.has(project.id)) {
      clearInterval(this.cardAutoSlideIntervals.get(project.id));
    }

    // Start new interval
    const interval = setInterval(() => {
      this.nextSlide(project);
    }, 3000); // Change every 3 seconds for cards

    this.cardAutoSlideIntervals.set(project.id, interval);
  }

  stopCardAutoSlide(project: Project): void {
    if (this.cardAutoSlideIntervals.has(project.id)) {
      clearInterval(this.cardAutoSlideIntervals.get(project.id));
      this.cardAutoSlideIntervals.delete(project.id);
    }
  }

  stopAllCardAutoSlides(): void {
    this.cardAutoSlideIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.cardAutoSlideIntervals.clear();
  }

  pauseCardAutoSlide(project: Project): void {
    this.stopCardAutoSlide(project);
  }

  resumeCardAutoSlide(project: Project): void {
    if (project.images && project.images.length > 1) {
      this.startCardAutoSlide(project);
    }
  }
}

import { Component } from '@angular/core';

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
export class ProjectsComponent {
  selectedProject: Project | null = null;

  projects: Project[] = [
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
      url: 'http://167.99.135.132/',
      context: 'IZZZI est une application web full-stack conteneurisée et orchestrée via Docker Swarm, réalisée en collaboration avec Jack-Sam MBAPPE KOUM. Le projet a été conçu pour démontrer une architecture cloud moderne avec un objectif principal : assurer un service ininterrompu même si des parties de l\'infrastructure tombent en panne.',
      objective: 'Créer une infrastructure cloud hautement disponible, tolérante aux pannes, avec des déploiements sans interruption et une évolutivité automatique. Le projet devait inclure l\'automatisation complète du provisionnement d\'infrastructure (IaC) et l\'orchestration de conteneurs.',
      achievements: [
        'Conception d\'une architecture haute disponibilité avec Docker Swarm',
        'Provisionnement automatisé de l\'infrastructure sur DigitalOcean avec Terraform',
        'Mise en place d\'un réseau virtuel privé chiffré (Overlay Network)',
        'Configuration de 3 pare-feu distincts (Web, Interne, Gestion) pour une sécurité robuste',
        'Implémentation de la réplication des services (Frontend x2, Backend x2)',
        'Configuration de l\'auto-réparation (auto-healing) des conteneurs',
        'Mise en place de déploiements sans interruption (Rolling Updates)',
        'Orchestration complète de 6 services (Frontend, Backend, PostgreSQL, Redis, Nginx, MailHog)',
        'Isolation réseau avec VPC et communication inter-services sécurisée',
        'Création de modules Terraform réutilisables (Networking, Droplet, Firewall, DNS, Spaces)'
      ],
      result: 'Une infrastructure cloud production-ready déployée avec succès, démontrant une haute disponibilité, une tolérance aux pannes prouvée (redémarrage automatique des conteneurs), et des mises à jour sans interruption de service. Le projet illustre une maîtrise complète de l\'orchestration de conteneurs et de l\'Infrastructure as Code.',
      skills: [
        'Architecture Cloud & Haute Disponibilité',
        'Infrastructure as Code (Terraform)',
        'Orchestration de conteneurs',
        'DevOps & CI/CD',
        'Sécurité réseau & Pare-feu',
        'Gestion de cluster'
      ],
      technicalSkills: [
        'Docker Swarm',
        'Terraform',
        'DigitalOcean',
        'Next.js 14 (React)',
        'NestJS (Node.js)',
        'PostgreSQL 16',
        'Redis',
        'Nginx',
        'VPC & Overlay Network',
        'Cloud-init',
        'Shell Scripting'
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
      subtitle: 'Site e-commerce Shopify de bijoux énergétiques et spirituels',
      url: 'https://ccusi.com/fr',
      context: 'CCUSI est une entreprise fondée en 2006 qui combine l\'héritage spirituel andin avec le design contemporain. Le projet consistait à créer une boutique en ligne complète pour la vente de bijoux énergétiques, objets spirituels et produits artisanaux, avec une présence internationale et multi-langues.',
      objective: 'Développer un site e-commerce Shopify entièrement personnalisé et fonctionnel, gérer l\'intégration complète des produits (de A à Z), personnaliser le thème pour refléter l\'identité de la marque, et créer une expérience utilisateur optimale pour le commerce international.',
      achievements: [
        'Personnalisation complète du thème Shopify selon l\'identité de la marque',
        'Intégration de catalogues produits multiples (bracelets minéraux, bijoux incas, objets spirituels, encens)',
        'Configuration multi-langues (Français, Anglais, Espagnol, Allemand, Italien, Russe, Portugais)',
        'Mise en place du système multi-devises pour le commerce international',
        'Création et organisation de collections thématiques (Zodiaque, 7 Chakras, Talismans)',
        'Intégration de fonctionnalités e-commerce avancées (promotions, stock, variantes)',
        'Optimisation SEO et performance du site',
        'Configuration des pages de contenu (About, Blog, Rituels & Significations)',
        'Mise en ligne et gestion complète de centaines de produits',
        'Création d\'une expérience utilisateur fluide et intuitive'
      ],
      result: 'Un site e-commerce Shopify professionnel et performant, disponible en 7 langues, proposant plus de 200 produits organisés en collections thématiques. Le site offre une expérience d\'achat internationale avec support multi-devises et reflète parfaitement l\'identité spirituelle et artisanale de la marque CCUSI.',
      skills: [
        'E-commerce Shopify',
        'Personnalisation de thème',
        'Gestion de catalogue produits',
        'Multi-langues & Multi-devises',
        'SEO e-commerce',
        'UX/UI Design'
      ],
      technicalSkills: [
        'Shopify Liquid',
        'HTML/CSS',
        'JavaScript',
        'Shopify Admin',
        'SEO',
        'Responsive Design',
        'Intégration de paiements',
        'Gestion de contenu'
      ],
      images: [
        'assets/images/ccusi/ccusi-1.png',
        'assets/images/ccusi/ccusi-2.png'
      ],
      currentSlide: 0
    },
    {
      id: 5,
      title: 'DANAYA-LUX',
      subtitle: 'Application Mobile React Native (iOS & Android) - E-commerce de Minéraux et Bijoux',
      url: 'https://github.com/Ayoub-ELHanda/application-danaya',
      context: 'DANAYA-LUX est une application mobile développée en React Native pour CCUSI, permettant aux clients d\'accéder à une vaste collection de minéraux rares et de bijoux exquis directement depuis leurs smartphones iOS et Android. Le projet a débuté en 2024 avec pour objectif de créer une expérience mobile complète et synchronisée avec le site e-commerce Shopify.',
      objective: 'Développer une application mobile native (iOS et Android) entièrement fonctionnelle et synchronisée avec Shopify, incluant la gestion complète des produits, des commandes, des utilisateurs et des paiements. Créer une extension Shopify personnalisée avec une API REST pour assurer la synchronisation en temps réel entre l\'application mobile et la boutique en ligne.',
      achievements: [
        'Développement complet d\'une application mobile React Native avec Expo',
        'Publication de l\'application sur l\'App Store (iOS) et Google Play (Android) sous le nom "Dianaalith"',
        'Création d\'une extension Shopify personnalisée avec API REST',
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
      title: 'Crm Intelligent',
      subtitle: 'Crm Intelligent avec Automatisation IA - LLMs, n8n & Workflows',
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
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }
}

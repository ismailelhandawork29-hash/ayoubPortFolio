import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Groupe Réunir',
      location: 'Montlignon',
      position: 'Développeur Full Stack',
      period: 'Décembre 2024 - Mars 2026',
      description: 'Conception et développement d\'une plateforme SaaS propriétaire (Réunir) en production',
      achievements: [
        'Développement frontend et backend d\'applications web',
        'Interconnexion de plateformes via APIs',
        'Création et évolution d\'un CRM interne (contacts, devis, facturation, suivi des tâches)',
        'Intégration de CMS et d\'un site e-commerce',
        'Déploiement et exploitation dans une logique DevOps (Docker)',
        'Maintenance évolutive des plateformes web du groupe',
        'Collaboration étroite avec les équipes métiers'
      ],
      icon: '💼'
    },
    {
      company: 'CCUSI Lux',
      location: 'Paris',
      position: 'Développeur Full Stack',
      period: 'Mars 2024 - Octobre 2024',
      achievements: [
        'Développement d\'interfaces web front-end et back-end',
        'Conception et gestion de la base de données utilisateurs',
        'Développement et mise en ligne de sites e-commerce (ccusi.com, danaya-lux.com)',
        'Conception d\'une application mobile dédiée à la vente en gros'
      ],
      icon: '🛍️'
    },
    {
      company: 'Telehouse France',
      location: 'Paris',
      position: 'Développeur Web',
      period: 'Avril 2023 - Juillet 2023',
      achievements: [
        'Développement d\'une application interne basée sur Symfony',
        'Contribution à l\'amélioration de solutions existantes à partir des retours utilisateurs',
        'Participation aux échanges techniques et au partage de compétences au sein de l\'équipe'
      ],
      icon: '🏢'
    },
    {
      company: 'Lasolda',
      location: 'Casablanca',
      position: 'Développeur Web',
      period: 'Septembre 2021 - Septembre 2022',
      achievements: [
        'Création de sites web marchands et vitrines (lasolda.ma, msm-carpentry.com)',
        'Optimisation quotidienne du référencement et de la performance des sites'
      ],
      icon: '🌐'
    }
  ];
}


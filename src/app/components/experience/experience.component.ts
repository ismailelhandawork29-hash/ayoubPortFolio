import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences: any[] = [];
  private langSubscription: Subscription | undefined;

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    this.updateContent();
    
    // Subscribe to language changes
    this.langSubscription = this.translationService.currentLanguage$.subscribe(() => {
      this.updateContent();
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  updateContent() {
    const currentLang = this.translationService.getLanguage();
    
    if (currentLang === 'fr') {
      this.experiences = [
        {
          company: 'Groupe Réunir',
          location: 'Montlignon',
          position: 'Développeur Full Stack',
          period: 'Décembre 2024 - Mars 2026',
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
    } else {
      this.experiences = [
        {
          company: 'Groupe Réunir',
          location: 'Montlignon',
          position: 'Full Stack Developer',
          period: 'December 2024 - March 2026',
          achievements: [
            'Frontend and backend development of web applications',
            'Platform interconnection via APIs',
            'Creation and evolution of an internal CRM (contacts, quotes, invoicing, task tracking)',
            'Integration of CMS and e-commerce website',
            'Deployment and operation with DevOps approach (Docker)',
            'Evolutive maintenance of group web platforms',
            'Close collaboration with business teams'
          ],
          icon: '💼'
        },
        {
          company: 'CCUSI Lux',
          location: 'Paris',
          position: 'Full Stack Developer',
          period: 'March 2024 - October 2024',
          achievements: [
            'Development of front-end and back-end web interfaces',
            'Design and management of user database',
            'Development and deployment of e-commerce sites (ccusi.com, danaya-lux.com)',
            'Design of a mobile application dedicated to wholesale'
          ],
          icon: '🛍️'
        },
        {
          company: 'Telehouse France',
          location: 'Paris',
          position: 'Web Developer',
          period: 'April 2023 - July 2023',
          achievements: [
            'Development of an internal Symfony-based application',
            'Contribution to improving existing solutions based on user feedback',
            'Participation in technical exchanges and skills sharing within the team'
          ],
          icon: '🏢'
        },
        {
          company: 'Lasolda',
          location: 'Casablanca',
          position: 'Web Developer',
          period: 'September 2021 - September 2022',
          achievements: [
            'Creation of e-commerce and showcase websites (lasolda.ma, msm-carpentry.com)',
            'Daily optimization of SEO and site performance'
          ],
          icon: '🌐'
        }
      ];
    }
  }
}


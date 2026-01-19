import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  educations: any[] = [];
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
      this.educations = [
        {
          institution: 'ESGI École Supérieure de Génie Informatique',
          location: 'Paris',
          degree: 'Master Génie Informatique',
          period: 'Janvier 2024 - Janvier 2026',
          icon: '🎓',
          description: 'Formation approfondie en génie informatique avec spécialisation en développement logiciel et systèmes d\'information'
        },
        {
          institution: 'ECE Paris',
          location: 'Paris',
          degree: 'Bachelor Développement Web & Mobile',
          period: 'Septembre 2022 - Juillet 2023',
          icon: '💻',
          description: 'Formation complète en développement web et mobile, couvrant les technologies frontend, backend et mobile'
        }
      ];
    } else {
      this.educations = [
        {
          institution: 'ESGI École Supérieure de Génie Informatique',
          location: 'Paris',
          degree: 'Master\'s Degree in Computer Engineering',
          period: 'January 2024 - January 2026',
          icon: '🎓',
          description: 'Advanced training in computer engineering with specialization in software development and information systems'
        },
        {
          institution: 'ECE Paris',
          location: 'Paris',
          degree: 'Bachelor\'s Degree in Web & Mobile Development',
          period: 'September 2022 - July 2023',
          icon: '💻',
          description: 'Comprehensive training in web and mobile development, covering frontend, backend and mobile technologies'
        }
      ];
    }
  }
}


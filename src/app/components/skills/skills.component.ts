import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  skillCategories: any[] = [];
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
    const categories = this.translationService.translate('skills.categories');
    const currentLang = this.translationService.getLanguage();
    
    this.skillCategories = [
      {
        title: categories.frontend,
        icon: '🎨',
        skills: [
          { name: 'HTML', level: 95 },
          { name: 'CSS', level: 90 },
          { name: 'JavaScript', level: 92 },
          { name: 'TypeScript', level: 90 },
          { name: 'React', level: 88 },
          { name: 'Next.js', level: 85 }
        ]
      },
      {
        title: categories.backend,
        icon: '⚙️',
        skills: [
          { name: 'Node.js', level: 85 },
          { name: 'NestJS', level: 82 },
          { name: 'PHP', level: 85 },
          { name: 'Symfony', level: 80 },
          { name: 'API REST', level: 90 },
          { name: 'Python', level: 78 },
          { name: 'Java', level: 75 }
        ]
      },
      {
        title: categories.programming,
        icon: '💻',
        skills: [
          { name: 'C', level: 70 },
          { name: 'Java', level: 75 },
          { name: 'Python', level: 78 }
        ]
      },
      {
        title: categories.mobile,
        icon: '📱',
        skills: [
          { name: 'React Native', level: 85 },
          { name: 'Expo', level: 85 },
          { name: 'Android Studio', level: 80 },
          { name: 'Ionic', level: 75 },
          { name: 'Swift', level: 40 }
        ]
      },
      {
        title: categories.ai,
        icon: '🤖',
        skills: [
          { name: 'LLM (Large Language Models)', level: 82 },
          { name: 'OpenAI (ChatGPT)', level: 85 },
          { name: 'n8n (Automation)', level: 80 },
          { name: 'Chatbot Development', level: 85 },
          { name: 'Workflow Automation', level: 80 },
          { name: 'Natural Language Processing', level: 78 }
        ]
      },
      {
        title: categories.database,
        icon: '🗄️',
        skills: [
          { name: 'PostgreSQL', level: 88 },
          { name: 'MySQL', level: 90 },
          { name: 'MongoDB', level: 85 }
        ]
      },
      {
        title: categories.devops,
        icon: '🚀',
        skills: [
          { name: 'Docker', level: 80 },
          { name: 'GitHub Actions', level: 75 },
          { name: 'GitLab CI', level: 72 }
        ]
      },
      {
        title: categories.cms,
        icon: '🛒',
        skills: [
          { name: 'Shopify', level: 85 },
          { name: 'WordPress', level: 88 },
          { name: 'Magento', level: 75 },
          { name: 'Drupal', level: 70 },
          { name: 'Wix', level: 80 }
        ]
      },
      {
        title: categories.soft,
        icon: '🤝',
        skills: [
          { name: currentLang === 'fr' ? 'Autonomie' : 'Autonomy', level: 95 },
          { name: 'Communication', level: 90 },
          { name: currentLang === 'fr' ? 'Esprit d\'équipe' : 'Teamwork', level: 92 }
        ]
      }
    ];
  }
}


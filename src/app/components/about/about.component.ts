import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  languages: any[] = [];
  interests: any[] = [];
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
    const langs = this.translationService.translate('about.languages');
    this.languages = [
      { name: langs.french.name, level: langs.french.level, icon: '🇫🇷' },
      { name: langs.arabic.name, level: langs.arabic.level, icon: '🇲🇦' },
      { name: langs.english.name, level: langs.english.level, icon: '🇬🇧' }
    ];

    const interests = this.translationService.translate('about.interests');
    this.interests = [
      { name: interests.tech, icon: '💻' },
      { name: interests.sports, icon: '⚽' },
      { name: interests.travel, icon: '✈️' },
      { name: interests.reading, icon: '📚' }
    ];
  }
}


import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { AnalyticsService } from '../../services/analytics.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  titles: string[] = [];
  currentTitleIndex = 0;
  currentIndex = 0;
  isDeleting = false;
  private langSubscription: Subscription | undefined;

  constructor(
    public translationService: TranslationService,
    private analytics: AnalyticsService
  ) {
    this.titles = this.translationService.translate('hero.titles');
  }

  ngOnInit() {
    this.typeText();
    
    // Subscribe to language changes
    this.langSubscription = this.translationService.currentLanguage$.subscribe(() => {
      this.titles = this.translationService.translate('hero.titles');
      // Reset typing animation
      this.currentIndex = 0;
      this.currentTitleIndex = 0;
      this.isDeleting = false;
      this.typedText = '';
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  typeText() {
    const currentTitle = this.titles[this.currentTitleIndex];
    const speed = this.isDeleting ? 50 : 100;
    
    if (!this.isDeleting && this.currentIndex < currentTitle.length) {
      this.typedText = currentTitle.substring(0, this.currentIndex + 1);
      this.currentIndex++;
      setTimeout(() => this.typeText(), speed);
    } else if (this.isDeleting && this.currentIndex > 0) {
      this.typedText = currentTitle.substring(0, this.currentIndex - 1);
      this.currentIndex--;
      setTimeout(() => this.typeText(), speed);
    } else if (this.currentIndex === currentTitle.length) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeText();
      }, 2000);
    } else {
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      setTimeout(() => this.typeText(), 500);
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  callPhone() {
    this.analytics.trackPhoneClick('hero');
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  typedText = '';
  fullText = 'Développeur Full Stack';
  currentIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    const speed = this.isDeleting ? 50 : 100;
    
    if (!this.isDeleting && this.currentIndex < this.fullText.length) {
      this.typedText = this.fullText.substring(0, this.currentIndex + 1);
      this.currentIndex++;
      setTimeout(() => this.typeText(), speed);
    } else if (this.isDeleting && this.currentIndex > 0) {
      this.typedText = this.fullText.substring(0, this.currentIndex - 1);
      this.currentIndex--;
      setTimeout(() => this.typeText(), speed);
    } else if (this.currentIndex === this.fullText.length) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeText();
      }, 2000);
    } else {
      this.isDeleting = false;
      setTimeout(() => this.typeText(), 500);
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}


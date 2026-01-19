import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  languages = [
    { name: 'Français', level: 'Bilingue', icon: '🇫🇷' },
    { name: 'Anglais', level: 'Avancé', icon: '🇬🇧' }
  ];

  interests = [
    { name: 'Cuisine', icon: '👨‍🍳' },
    { name: 'Football', icon: '⚽' },
    { name: 'Musique', icon: '🎵' },
    { name: 'Voyage', icon: '✈️' }
  ];
}


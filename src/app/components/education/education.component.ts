import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations = [
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
}


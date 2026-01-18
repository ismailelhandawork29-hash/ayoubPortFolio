import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Développement Full Stack',
      icon: '💻',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'PHP', level: 85 },
        { name: 'API REST', level: 90 },
        { name: 'Symfony', level: 80 },
        { name: 'NestJS', level: 82 }
      ]
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Swift', level: 40 }
      ]
    },
    {
      title: 'Bases de données',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      title: 'DevOps & Déploiement',
      icon: '🚀',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 70 }
      ]
    },
    {
      title: 'CMS & E-commerce',
      icon: '🛒',
      skills: [
        { name: 'Shopify', level: 85 },
        { name: 'WordPress', level: 88 },
        { name: 'Wix', level: 80 }
      ]
    },
    {
      title: 'Compétences transverses',
      icon: '🤝',
      skills: [
        { name: 'Autonomie', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Esprit d\'équipe', level: 92 }
      ]
    }
  ];
}


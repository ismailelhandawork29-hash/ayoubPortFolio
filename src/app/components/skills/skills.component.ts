import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
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
      title: 'Backend',
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
      title: 'Programmation',
      icon: '💻',
      skills: [
        { name: 'C', level: 70 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 78 }
      ]
    },
    {
      title: 'Mobile',
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
      title: 'Intelligence Artificielle & Automatisation',
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
        { name: 'Magento', level: 75 },
        { name: 'Drupal', level: 70 },
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


import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'elhandayo@gmail.com',
    phone: '0651829227',
    location: 'Paris, France'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.isSubmitting = false;
    }, 1000);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copié dans le presse-papier !`);
    });
  }
}


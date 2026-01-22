import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { AnalyticsService } from '../../services/analytics.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(
    public translationService: TranslationService,
    private analytics: AnalyticsService
  ) {}

  contactInfo = {
    email: 'elhandaayo@gmail.com',
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
  showNotification = false;
  notificationMessage = '';
  notificationType: 'success' | 'error' | 'info' = 'success';
  showFormModal = false;

  // Configuration EmailJS
  private readonly EMAIL_SERVICE_ID = 'service_134z5ss';
  private readonly EMAIL_TEMPLATE_ID = 'template_ydj78rw';
  private readonly EMAIL_PUBLIC_KEY = 'dg5Me5EgjOBbq-tWX';

  openFormModal() {
    this.showFormModal = true;
    document.body.style.overflow = 'hidden';
    this.analytics.trackContactFormOpen('mobile_menu');
  }

  closeFormModal() {
    this.showFormModal = false;
    document.body.style.overflow = '';
  }

  callPhone() {
    this.analytics.trackPhoneClick('mobile_menu');
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  showNotificationPopup(message: string, type: 'success' | 'error' | 'info' = 'success') {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    // Auto-fermer après 5 secondes
    setTimeout(() => {
      this.closeNotification();
    }, 5000);
  }

  closeNotification() {
    this.showNotification = false;
  }

  async onSubmit() {
    if (this.isSubmitting) return;
    
    // Validation simple
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      this.showNotificationPopup('Veuillez remplir tous les champs du formulaire.', 'error');
      return;
    }
    
    this.isSubmitting = true;
    
    try {
      // Préparer les paramètres pour EmailJS
      const templateParams = {
        name: this.formData.name,
        email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
        to_email: 'elhandaayo@gmail.com',
        date: new Date().toLocaleString('fr-FR')
      };

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams,
        this.EMAIL_PUBLIC_KEY
      );

      console.log('Email envoyé avec succès!', response);
      this.showNotificationPopup('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.', 'success');
      
      // Track successful form submission
      this.analytics.trackContactFormSubmit(true, 'email');
      
      // Réinitialiser le formulaire et fermer le modal
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.closeFormModal();
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      this.showNotificationPopup('Une erreur est survenue. Veuillez réessayer ou me contacter directement à elhandaayo@gmail.com', 'error');
      
      // Track failed form submission
      this.analytics.trackContactFormSubmit(false, 'email');
    } finally {
      this.isSubmitting = false;
    }
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.showNotificationPopup(`${text} copié dans le presse-papier !`, 'success');
    });
  }
}


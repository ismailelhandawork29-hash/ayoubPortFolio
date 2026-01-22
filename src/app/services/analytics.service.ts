import { Injectable } from '@angular/core';
import posthog from 'posthog-js';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private sectionsViewed = new Set<string>();
  private maxScrollDepth = 0;

  constructor() {
    this.initScrollTracking();
    this.initSectionTracking();
  }

  /**
   * Track scroll depth
   */
  private initScrollTracking(): void {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

          // Track every 25% milestone
          if (scrollPercent > this.maxScrollDepth && scrollPercent % 25 === 0) {
            this.maxScrollDepth = scrollPercent;
            posthog.capture('scroll_depth', {
              depth_percent: scrollPercent,
              page: window.location.pathname
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /**
   * Track when sections become visible
   */
  private initSectionTracking(): void {
    // Wait for DOM to be ready
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      setTimeout(() => {
        const sections = document.querySelectorAll('app-hero, app-about, app-skills, app-projects, app-experience, app-education, app-contact');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              const sectionName = entry.target.tagName.toLowerCase().replace('app-', '');
              
              if (!this.sectionsViewed.has(sectionName)) {
                this.sectionsViewed.add(sectionName);
                posthog.capture('section_viewed', {
                  section: sectionName,
                  timestamp: new Date().toISOString()
                });
              }
            }
          });
        }, {
          threshold: [0.5] // Section must be 50% visible
        });

        sections.forEach(section => observer.observe(section));
      }, 1000);
    }
  }

  /**
   * Track project views
   */
  trackProjectView(projectTitle: string, projectUrl?: string): void {
    posthog.capture('project_viewed', {
      project_name: projectTitle,
      project_url: projectUrl || 'N/A'
    });
  }

  /**
   * Track project image navigation
   */
  trackProjectImageNavigation(projectTitle: string, direction: 'next' | 'previous'): void {
    posthog.capture('project_image_navigation', {
      project_name: projectTitle,
      direction: direction
    });
  }

  /**
   * Track contact form submission
   */
  trackContactFormSubmit(success: boolean, method: 'email' | 'phone' = 'email'): void {
    posthog.capture('contact_form_submit', {
      success: success,
      method: method,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Track contact form opened (mobile)
   */
  trackContactFormOpen(source: 'mobile_menu' | 'section'): void {
    posthog.capture('contact_form_opened', {
      source: source
    });
  }

  /**
   * Track phone call clicks
   */
  trackPhoneClick(source: 'hero' | 'contact' | 'mobile_menu'): void {
    posthog.capture('phone_click', {
      source: source,
      phone_number: '+33 6 52 19 36 22'
    });
  }

  /**
   * Track navbar clicks
   */
  trackNavigation(destination: string): void {
    posthog.capture('navigation_click', {
      destination: destination,
      from: window.location.hash || 'top'
    });
  }

  /**
   * Track social media clicks
   */
  trackSocialClick(platform: string, url: string): void {
    posthog.capture('social_media_click', {
      platform: platform,
      url: url
    });
  }

  /**
   * Track skill category expansion
   */
  trackSkillCategoryView(category: string): void {
    posthog.capture('skill_category_viewed', {
      category: category
    });
  }

  /**
   * Track language switch
   */
  trackLanguageSwitch(fromLang: string, toLang: string): void {
    posthog.capture('language_switched', {
      from: fromLang,
      to: toLang
    });
  }
}

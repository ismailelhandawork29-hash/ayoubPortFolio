import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import posthog from 'posthog-js';
import { environment } from './environments/environment';

// Initialize PostHog
posthog.init(
  environment.posthog.apiKey,
  {
    api_host: environment.posthog.apiHost,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    capture_pageview: true, // Automatically capture pageviews
    capture_pageleave: true // Capture when users leave the page
  }
);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


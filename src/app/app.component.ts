import { Component } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ayoub El Handa - Portfolio';

  constructor(private analytics: AnalyticsService) {
    // Analytics service automatically initializes scroll and section tracking
  }
}


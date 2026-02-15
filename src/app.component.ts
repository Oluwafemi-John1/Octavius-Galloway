
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RunAnalyticsComponent } from './components/run-analytics/run-analytics.component';
import { PerformanceDashboardComponent } from './components/performance-dashboard/performance-dashboard.component';

export type ViewType = 'dashboard' | 'analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RunAnalyticsComponent, PerformanceDashboardComponent],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  currentView = signal<ViewType>('analytics');

  setView(view: ViewType) {
    this.currentView.set(view);
  }
}

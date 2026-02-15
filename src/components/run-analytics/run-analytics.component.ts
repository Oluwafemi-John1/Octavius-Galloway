
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-run-analytics',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './run-analytics.component.html',
  styles: [`
    .glass-panel {
        background: rgba(26, 37, 48, 0.7);
        backdrop-filter: blur(12px);
    }
    .metric-glow {
        text-shadow: 0 0 15px rgba(13, 127, 242, 0.4);
    }
  `]
})
export class RunAnalyticsComponent {
  recentRuns = [
    { date: 'Dec 14, 2023', location: 'Gran Risa', type: 'Technical Drill', time: '1:24.42', status: 'VALIDATED', statusColor: 'emerald' },
    { date: 'Dec 14, 2023', location: 'Gran Risa', type: 'Full Speed Trial', time: '1:25.18', status: 'VALIDATED', statusColor: 'emerald' },
    { date: 'Dec 12, 2023', location: 'Piz La Ila', type: 'Warm Up', time: '1:28.05', status: 'ARCHIVED', statusColor: 'slate' },
  ];
}

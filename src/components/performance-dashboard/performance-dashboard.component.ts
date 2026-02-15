
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-performance-dashboard',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './performance-dashboard.component.html',
  styles: []
})
export class PerformanceDashboardComponent {
  calendarDays = [
      { day: 29, active: false, current: false },
      { day: 30, active: false, current: false },
      { day: 31, active: false, current: false },
      { day: 1, active: true, type: 'intense' },
      { day: 2, active: true, type: 'recovery' },
      { day: 3, active: true, type: 'race' },
      { day: 4, active: true, type: 'race' },
      { day: 5, active: false, current: true }, // Current day
      { day: 6, active: false, current: false },
      { day: 7, active: false, current: false },
      { day: 8, active: false, current: false },
      { day: 9, active: true, type: 'intense' },
      { day: 10, active: true, type: 'intense' },
      { day: 11, active: true, type: 'recovery' }
  ];
}

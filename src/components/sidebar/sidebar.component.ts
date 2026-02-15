
import { Component, input, output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ViewType } from '../../app.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {
  activeView = input.required<ViewType>();
  viewChange = output<ViewType>();

  navItems = [
    { id: 'dashboard', label: 'Performance Hub', icon: 'dashboard' },
    { id: 'analytics', label: 'Run Analytics', icon: 'insights' },
    { id: 'previews', label: 'Course Previews', icon: 'map' }, // Placeholder
    { id: 'training', label: 'Training Loads', icon: 'fitness_center' }, // Placeholder
    { id: 'hardware', label: 'Hardware Sync', icon: 'settings' }, // Placeholder
  ];

  selectView(id: string) {
    if (id === 'dashboard' || id === 'analytics') {
      this.viewChange.emit(id as ViewType);
    }
  }
}

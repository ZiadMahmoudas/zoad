import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeColor } from '../../services/theme.service';

@Component({
  selector: 'app-style-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-switcher.component.html',
})
export class StyleSwitcherComponent {
  isOpen = false;

  colors: ThemeColor[] = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

  constructor(public themeService: ThemeService) {}

  toggleSwitcher(): void {
    this.isOpen = !this.isOpen;
  }

  setColor(color: ThemeColor): void {
    this.themeService.setColor(color);
  }

  toggleDark(): void {
    this.themeService.toggleDark();
  }
}

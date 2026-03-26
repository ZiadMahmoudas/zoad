import { Injectable } from '@angular/core';

export type ThemeColor = 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5';

const COLOR_MAP: Record<ThemeColor, string> = {
  'color-1': '#ec1839',
  'color-2': '#fa5b0f',
  'color-3': '#37b182',
  'color-4': '#1854b4',
  'color-5': '#f021b2',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly DARK_KEY = 'portfolio_dark_mode';
  private readonly COLOR_KEY = 'portfolio_theme_color';

  isDark = false;
  activeColor: ThemeColor = 'color-1';

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const savedDark = localStorage.getItem(this.DARK_KEY);
    const savedColor = localStorage.getItem(this.COLOR_KEY) as ThemeColor;

    this.isDark = savedDark === 'true';
    this.activeColor = savedColor && COLOR_MAP[savedColor] ? savedColor : 'color-1';

    this.applyDark();
    this.applyColor(this.activeColor);
  }

  toggleDark(): void {
    this.isDark = !this.isDark;
    localStorage.setItem(this.DARK_KEY, String(this.isDark));
    this.applyDark();
  }

  setColor(color: ThemeColor): void {
    this.activeColor = color;
    localStorage.setItem(this.COLOR_KEY, color);
    this.applyColor(color);
  }

  private applyDark(): void {
    if (this.isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  private applyColor(color: ThemeColor): void {
    document.documentElement.style.setProperty('--skin-color', COLOR_MAP[color]);
  }
}

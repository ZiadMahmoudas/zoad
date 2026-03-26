import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'certificate';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private activeSection$ = new BehaviorSubject<SectionId>('home');
  private backSection$ = new BehaviorSubject<SectionId | null>(null);

  activeSection = this.activeSection$.asObservable();
  backSection = this.backSection$.asObservable();

  navigateTo(target: SectionId): void {
    const current = this.activeSection$.getValue();
    if (current !== target) {
      this.backSection$.next(current);
      setTimeout(() => this.backSection$.next(null), 1000);
    }
    this.activeSection$.next(target);
  }

  getCurrentSection(): SectionId {
    return this.activeSection$.getValue();
  }
}

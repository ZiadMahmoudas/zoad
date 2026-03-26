import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService, SectionId } from '../../services/navigation.service';
import { Subscription } from 'rxjs';

interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
})
export class AsideComponent implements OnInit, OnDestroy {
  isOpen = false;
  activeSection: SectionId = 'home';
  private sub!: Subscription;

  navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'fa fa-home', href: '#home' },
    { id: 'about', label: 'About', icon: 'fa fa-user', href: '#about' },
    { id: 'services', label: 'Services', icon: 'fa fa-list', href: '#services' },
    { id: 'certificate', label: 'Certificate', icon: 'fa-solid fa-certificate', href: '#certificate' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa fa-briefcase', href: '#portfolio' },
    { id: 'contact', label: 'Contact', icon: 'fa fa-comments', href: '#contact' },
  ];

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.sub = this.navService.activeSection.subscribe(
      (section) => (this.activeSection = section)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  navigate(id: SectionId): void {
    this.navService.navigateTo(id);
    if (window.innerWidth < 1200) {
      this.toggleMenu();
    }
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { CommonModule } from '@angular/common';
import { StyleSwitcherComponent } from './components/style-switcher/style-switcher.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavigationService, SectionId } from './services/navigation.service';
import { certificates } from "./components/certificates/certificates";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    AsideComponent,
    StyleSwitcherComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    certificates
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  activeSection: SectionId = 'home';
  backSection: SectionId | null = null;

  sections: SectionId[] = ['home', 'about', 'services', 'portfolio', 'contact'];

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navService.activeSection.subscribe((s) => (this.activeSection = s));
    this.navService.backSection.subscribe((s) => (this.backSection = s));
  }

  isActive(section: SectionId): boolean {
    return this.activeSection === section;
  }

  isBack(section: SectionId): boolean {
    return this.backSection === section;
  }
}

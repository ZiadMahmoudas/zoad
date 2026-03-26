import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      icon: 'fa fa-mobile-alt',
      title: 'Web Design',
      description: 'I offer custom website designs, responsive design to ensure compatibility across devices, and UI/UX design to enhance user experience',
    },
    {
      icon: 'fa fa-laptop-code',
      title: 'Graphic Design',
      description: 'I design logos, icons, illustrations, and other visual assets that enhance the website\'s branding and aesthetic appeal',
    },
    {
      icon: 'fa fa-palette',
      title: 'Digital Marketing',
      description: 'I build websites that enhances visual aesthetics, user experience, SEO, responsive design and mainly conversion optimization',
    },
    {
      icon: 'fa fa-code',
      title: 'UI/UX Solutions',
      description: 'I offer custom research and design to increase your customer satisfaction and obtain higher conversion rates',
    },
    {
      icon: 'fa fa-search',
      title: 'Brand Consultancy',
      description: 'I build brands through cultural insights & strategic vision. Custom crafted business solution',
    },
    {
      icon: 'fa fa-bullhorn',
      title: 'Photography',
      description: 'I make high-quality photos of any category at a professional level.',
    },
  ];
}

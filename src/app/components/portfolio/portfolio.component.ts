import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

interface PortfolioItem {
  img: string;
  title: string;
  category: string;
  demoUrl: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('350ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PortfolioComponent {
  activeFilter: string = 'All';

  filters = ['All', 'Web Design', 'Backend', 'WordPress'];

  portfolioItems: PortfolioItem[] = [
    {
      img: 'images/Gouad.webp',
      title: 'Gouad',
      category: 'Web Design',
      demoUrl: 'https://gouad.netlify.app',
    },
    {
      img: 'images/Horsing.webp',
      title: 'Horsing',
      category: 'Web Design',
      demoUrl: 'https://funny-narwhal-d89525.netlify.app',
    },
    {
      img: 'images/XO.webp',
      title: 'XO',
      category: 'Backend',
      demoUrl: 'https://xo123456.netlify.app',
    },
    {
      img: 'images/laza.webp',
      title: 'laza',
      category: 'Web Design',
      demoUrl: 'https://https://laza123.netlify.app',
    },
    {
      img: 'images/Taif.webp',
      title: 'Taif',
      category: 'Backend',
      demoUrl: 'https://taifdwork.com',
    },
    {
      img: 'images/profilo.webp',
      title: 'profilo',
      category: 'Backend',
      demoUrl: 'https://ziko-web-site.vercel.app',
    },
    {
      img: 'images/EnterTap.webp',
      title: 'EnterTap',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/Enter-Tab',
    },
    {
      img: 'images/ShowShopy.webp',
      title: 'ShowShopy',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/ShowShop',
    },
    {
      img: 'images/Khera.webp',
      title: 'Khera',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/projectKhera',
    },
    {
      img: 'images/Store.webp',
      title: 'Store',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/Store',
    },
    {
      img: 'images/LAWV.webp',
      title: 'LAWV',
      category: 'Web Design',
      demoUrl: 'https://peaceful-croquembouche-d83c3f.netlify.app',
    },
    {
      img: 'images/Start.webp',
      title: 'Start',
      category: 'UI/UX',
      demoUrl: 'https://ziadmahmoudas.github.io/Start',
    },
    {
      img: 'images/Travlog.webp',
      title: 'Project Gamma',
      category: 'Web Design',
      demoUrl: 'https://stirring-raindrop-9eb46c.netlify.app',
    },
    {
      img: 'images/Fish.webp',
      title: 'Project Delta',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/fisher2',
    },
    {
      img: 'images/FoodBox.webp',
      title: 'Project Epsilon',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/FoodBox',
    },
    {
      img: 'images/lookScout.webp',
      title: 'Project Zeta',
      category: 'Web Design',
      demoUrl: 'https://ziadmahmoudas.github.io/looksut',
    },
    {
      img: 'images/Sundown.webp',
      title: 'Project Zeta',
      category: 'Web Design',
      demoUrl: 'https://melodic-phoenix-d690ed.netlify.app',
    },
    {
      img: 'images/K7.webp',
      title: 'Project Zeta',
      category: 'Web Design',
      demoUrl: 'https://k7me.netlify.app',
    },
    {
      img: 'images/mexcre.webp',
      title: 'mexcreviews',
      category: 'WordPress',
      demoUrl: 'https://mexicocroc.com',
    },
    {
      img: 'images/uofiq.webp',
      title: 'ufuqalula(افق العلا)',
      category: 'WordPress',
      demoUrl: 'https://ufuqalula.com',
    },
    {
      img: 'images/abdullahmotion.webp',
      title: 'abdullahmotion',
      category: 'WordPress',
      demoUrl: 'https://abdullahmotion.com',
    },
    
  ];
    get filteredItems(): PortfolioItem[] {
    if (this.activeFilter === 'All') return this.portfolioItems;
    return this.portfolioItems.filter(i => i.category === this.activeFilter);
  }

  getCount(filter: string): number {
    if (filter === 'All') return this.portfolioItems.length;
    return this.portfolioItems.filter(i => i.category === filter).length;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
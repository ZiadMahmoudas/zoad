import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Other';
  img: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(24px)' }),
            stagger('80ms', [
              animate(
                '400ms cubic-bezier(0.4, 0, 0.2, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class certificates implements OnInit {
  activeFilter: string = 'All';

  filters: string[] = ['All', 'Frontend', 'Backend', 'Design', 'Other'];

  certificates: Certificate[] = [
    {
      id: 1,
      title: 'Angular - The Complete Guide',
      issuer: 'Udemy',
      date: 'Jan 2024',
      category: 'Frontend',
      img: 'images/certs/angular.webp',
      credentialUrl: 'https://udemy.com/certificate/...',
    },
    {
      id: 2,
      title: 'React & Redux Complete Course',
      issuer: 'Coursera',
      date: 'Mar 2024',
      category: 'Frontend',
      img: 'images/certs/react.webp',
      credentialUrl: 'https://coursera.org/verify/...',
    },
    {
      id: 3,
      title: 'Node.js Developer Course',
      issuer: 'Udemy',
      date: 'Nov 2023',
      category: 'Backend',
      img: 'images/certs/nodejs.webp',
      credentialUrl: 'https://udemy.com/certificate/...',
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      date: 'Aug 2023',
      category: 'Design',
      img: 'images/certs/uiux.webp',
      credentialUrl: 'https://grow.google/certificates/...',
    },
    {
      id: 5,
      title: 'CSS Advanced Techniques',
      issuer: 'freeCodeCamp',
      date: 'Jun 2023',
      category: 'Frontend',
      img: 'images/certs/css.webp',
    },
    {
      id: 6,
      title: 'MongoDB & Mongoose',
      issuer: 'MongoDB University',
      date: 'Oct 2023',
      category: 'Backend',
      img: 'images/certs/mongodb.webp',
      credentialUrl: 'https://university.mongodb.com/...',
    },
  ];

  get filteredCertificates(): Certificate[] {
    if (this.activeFilter === 'All') return this.certificates;
    return this.certificates.filter((c) => c.category === this.activeFilter);
  }

  getCount(filter: string): number {
    if (filter === 'All') return this.certificates.length;
    return this.certificates.filter((c) => c.category === filter).length;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      Frontend: 'fas fa-code',
      Backend: 'fas fa-server',
      Design: 'fas fa-palette',
      Other: 'fas fa-certificate',
    };
    return icons[category] || 'fas fa-certificate';
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      Frontend: 'cat-frontend',
      Backend: 'cat-backend',
      Design: 'cat-design',
      Other: 'cat-other',
    };
    return colors[category] || 'cat-other';
  }

  ngOnInit(): void {}
}
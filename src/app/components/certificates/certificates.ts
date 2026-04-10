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
  category: 'Frontend' | 'Backend'  | 'Full-stack' | 'lead' | 'FreeLancer';
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

  filters: string[] = ['All', 'Frontend', 'Full-stack' ,'Backend', 'lead','FreeLancer'];

  certificates: Certificate[] = [
    {
      id: 1,
      title: 'php - The Complete Guide',
      issuer: 'Udemy',
      date: 'feb 2026',
      category: 'Full-stack',
      img: 'images/6.webp',
      // credentialUrl: 'https://udemy.com/certificate/...',
    },
    {
      id: 2,
      title: 'Frontend(Angular)',
      issuer: 'Coursera',
      date: 'Mar 2024',
      category: 'Frontend',
      img: 'images/7.webp',
      // credentialUrl: 'https://coursera.org/verify/...',
    },
    {
      id: 3,
      title: 'LeadShip Developer Course',
      issuer: 'Depi',
      date: 'may 2025',
      category: 'lead',
      img: 'images/5.webp',
      // credentialUrl: 'https://udemy.com/certificate/...',
    },
    {
      id: 4,
      title: 'Backend(.NET)',
      issuer: 'ITI',
      date: 'Aug 2025',
      category: 'Backend',
      img: 'images/4.webp',
      // credentialUrl: 'https://grow.google/certificates/...',
    },
    {
      id: 5,
      title: 'FrontEnd(Angular)',
      issuer: 'DEPI',
      date: 'may 2025',
      category: 'Frontend',
      img: 'images/3.webp',
    },
      {
      id: 6,
      title: 'FreeLancer',
      issuer: 'Itida',
      date: 'Oct 2025',
      category: 'FreeLancer',
      img: 'images/1.webp',
      // credentialUrl: 'https://university.mongodb.com/...',
    },
    {
      id: 7,
      title: 'Intern',
      issuer: 'Itida',
      date: 'may 2025',
      category: 'FreeLancer',
      img: 'images/2.webp',
    },
    {
      id: 8,
      title: 'FrontEnd(Angular)',
      issuer: 'DEPI',
      date: 'may 2025',
      category: 'Frontend',
      img: 'images/7.webp',
    },
    {
      id: 9,
      title: 'FrontEnd(React.js)',
      issuer: 'DEPI',
      date: 'may 2025',
      category: 'Frontend',
      img: 'images/codveda.webp',
    },
    {
      id: 10,
      title: 'FrontEnd(React.js)',
      issuer: 'DEPI',
      date: 'may 2025',
      category: 'Frontend',
      img: 'images/codvedaoffer.webp',
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
// أضف هذه الـ Method داخل الـ class
downloadImage(imageUrl: string, title: string) {
  const fileName = `${title.replace(/\s+/g, '-').toLowerCase()}-certificate.webp`;
  
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName; // اسم الملف عند التحميل
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(err => console.error('Error downloading image:', err));
}
  ngOnInit(): void {}
}
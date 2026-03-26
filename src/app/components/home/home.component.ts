import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

declare const Typed: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  constructor(private navService: NavigationService) {}

  ngAfterViewInit(): void {
    if (typeof Typed !== 'undefined') {
      new Typed('.typing', {
        strings: ['', 'Web Designer', 'Web Developer', 'Content Creator', 'FreeLancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
    }
  }

  goToContact(): void {
    this.navService.navigateTo('contact');
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ScrollService } from '../../services/scroll.service';
import { PORTFOLIO_DATA } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, CardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  readonly scrollService = inject(ScrollService);
  readonly data = PORTFOLIO_DATA.personal;

  readonly keyFacts = [
    { label: 'University', value: this.data.university, icon: 'pi pi-building', color: 'text-indigo-400' },
    { label: 'Degree', value: this.data.degree, icon: 'pi pi-graduation-cap', color: 'text-cyan-400' },
    { label: 'Academic Standing', value: this.data.year, icon: 'pi pi-calendar', color: 'text-purple-400' },
    { label: 'Current Location', value: this.data.location, icon: 'pi pi-map-marker', color: 'text-emerald-400' }
  ];


  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}

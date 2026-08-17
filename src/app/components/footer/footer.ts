import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollService } from '../../services/scroll.service';
import { PORTFOLIO_DATA } from '../../models/portfolio.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  readonly scrollService = inject(ScrollService);
  readonly data = PORTFOLIO_DATA.personal;
  readonly currentYear = new Date().getFullYear();

  scrollToTop(): void {
    this.scrollService.scrollTo('home');
  }
}

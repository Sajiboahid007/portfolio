import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';
import { PORTFOLIO_DATA } from '../../models/portfolio.model';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  readonly scrollService = inject(ScrollService);
  readonly data = PORTFOLIO_DATA.personal;

  readonly mobileMenuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'pi pi-home' },
    { id: 'about', label: 'About', icon: 'pi pi-user' },
    { id: 'skills', label: 'Skills', icon: 'pi pi-bolt' },
    { id: 'projects', label: 'Projects', icon: 'pi pi-th-large' },
    { id: 'education', label: 'Education', icon: 'pi pi-graduation-cap' },
    { id: 'contact', label: 'Contact', icon: 'pi pi-envelope' }
  ];

  get initials(): string {
    if (!this.data.name) return 'SH';
    return this.data.name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }

  navigateTo(id: string): void {
    this.scrollService.scrollTo(id);
    this.mobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

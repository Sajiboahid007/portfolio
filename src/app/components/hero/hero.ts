import { Component, inject, OnInit, OnDestroy, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { ScrollService } from '../../services/scroll.service';
import { PORTFOLIO_DATA } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule, TagModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly data = PORTFOLIO_DATA.personal;

  readonly currentRoleText = signal<string>('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterTimer: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.typewrite();
    } else {
      this.currentRoleText.set(this.data.roles[0]);
    }
  }

  ngOnDestroy(): void {
    if (this.typewriterTimer) {
      clearTimeout(this.typewriterTimer);
    }
  }

  private typewrite(): void {
    const roles = this.data.roles;
    const currentRole = roles[this.roleIndex % roles.length];

    if (this.isDeleting) {
      this.charIndex--;
      this.currentRoleText.set(currentRole.substring(0, this.charIndex));
    } else {
      this.charIndex++;
      this.currentRoleText.set(currentRole.substring(0, this.charIndex));
    }

    let typeSpeed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      typeSpeed = 1800; // pause at end of word
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex++;
      typeSpeed = 400; // pause before starting next word
    }

    this.typewriterTimer = setTimeout(() => this.typewrite(), typeSpeed);
  }

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  downloadCV(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const resumePath = this.data.resumeUrl || 'assets/images/SajibHosen.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Sajib_Hossen_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

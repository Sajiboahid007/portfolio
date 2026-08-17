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
    
    // Trigger sample downloadable resume file
    const sampleResumeContent = `
==============================================================
${this.data.name.toUpperCase()} - RESUME & CV
Email: ${this.data.email} | Phone: ${this.data.phone}
Location: ${this.data.location}
GitHub: ${this.data.github} | LinkedIn: ${this.data.linkedin}
==============================================================

EDUCATION:
- B.Sc. in Computer Science & Engineering | ${this.data.university} (2022 - 2026) | CGPA: 3.51 / 4.00
- Higher Secondary Certificate (HSC) | Kaliakair Degree College (2018 - 2021) | GPA: 4.00 / 5.00
- Secondary School Certificate (SSC) | Ashraf Ali High School (Passing Year: 2018) | GPA: 4.56 / 5.00

KEY SKILLS & TECHNOLOGIES:
- Languages: TypeScript, JavaScript (ES6+), Kotlin, C / C++, PHP, HTML5, SCSS
- Frameworks & Mobile: Angular (Signals & Standalone), Android SDK & Jetpack, Node.js & Express, PrimeNG, Tailwind CSS
- Databases & Cloud: SQL Server Management Studio (SSMS), MySQL, PostgreSQL, Firebase, SQLite / Room DB
- Tools & DevOps: Git & GitHub, Linux / Bash, Docker, Postman, Figma

ACHIEVEMENTS & PROBLEM SOLVING:
- 150+ Algorithmic Problems Solved on Beecrowd / Online Judges
- National Hackathon 1st Runner Up (2025)
- Dean's List for Outstanding Academic Performance
- Research Project: Machine Learning model for early disease detection
==============================================================
    `;

    const blob = new Blob([sampleResumeContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.data.name.replace(/\s+/g, '_')}_Resume_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

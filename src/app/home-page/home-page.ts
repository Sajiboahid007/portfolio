import { Component, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar';
import { HeroComponent } from '../components/hero/hero';
import { AboutComponent } from '../components/about/about';
import { SkillsComponent } from '../components/skills/skills';
import { ProjectsComponent } from '../components/projects/projects';
import { EducationComponent } from '../components/education/education';
import { ContactComponent } from '../components/contact/contact';
import { FooterComponent } from '../components/footer/footer';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements AfterViewInit, OnDestroy {
  private readonly scrollService = inject(ScrollService);

  ngAfterViewInit(): void {
    // Initialize IntersectionObserver to track visible sections
    this.scrollService.initObserver([
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'contact'
    ]);
  }

  ngOnDestroy(): void {
    this.scrollService.disconnectObserver();
  }
}

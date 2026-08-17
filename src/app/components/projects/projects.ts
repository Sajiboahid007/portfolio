import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { PORTFOLIO_DATA, Project } from '../../models/portfolio.model';

interface FilterOption {
  key: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, TagModule, TooltipModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  readonly allProjects: Project[] = PORTFOLIO_DATA.projects;

  readonly selectedCategory = signal<string>('all');
  readonly selectedProject = signal<Project | null>(null);
  readonly isModalVisible = signal<boolean>(false);

  readonly filters: FilterOption[] = [
    { key: 'all', label: 'All Projects', icon: 'pi pi-th-large' },
    { key: 'web', label: 'Full-Stack Web', icon: 'pi pi-globe' },
    { key: 'ai', label: 'AI & ML', icon: 'pi pi-sparkles' },
    { key: 'tools', label: 'Dev Tools', icon: 'pi pi-wrench' },
    { key: 'academic', label: 'Academic & CS', icon: 'pi pi-book' }
  ];

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === category);
  });

  setFilter(category: string): void {
    this.selectedCategory.set(category);
  }

  openProjectDetails(project: Project): void {
    this.selectedProject.set(project);
    this.isModalVisible.set(true);
  }

  closeModal(): void {
    this.isModalVisible.set(false);
    this.selectedProject.set(null);
  }
}

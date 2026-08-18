import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { PORTFOLIO_DATA, TimelineItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TimelineModule, TagModule, CardModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  readonly timelineItems: TimelineItem[] = PORTFOLIO_DATA.timeline;
}

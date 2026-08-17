import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Sajib Hossen | CS Graduate & Full-Stack Developer'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

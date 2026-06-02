import { Routes } from '@angular/router';
import { FacultadesComponent } from './features/facultades/facultades.component';

export const routes: Routes = [
  { path: '', redirectTo: 'facultades', pathMatch: 'full' },
  { path: 'facultades', component: FacultadesComponent }
];

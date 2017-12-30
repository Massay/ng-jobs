import { RouterModule, Routes } from '@angular/router';
import {JobCardComponent, JobCardListComponent, JobItemComponent} from './index';
import { AuthGuard } from '../shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'jobs',
    component: JobCardListComponent,
    canActivate: [AuthGuard]
  }
];


export const jobRoutes = RouterModule.forChild(routes);

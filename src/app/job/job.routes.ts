import { RouterModule, Routes } from '@angular/router';
import {JobCardComponent, JobCardListComponent, JobItemComponent} from './index';
import { JobCreateComponent } from './job-create/job-create.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { JobMainComponent } from './job-main/job-main.component';
export const routes: Routes = [
  {
    path: 'jobs',
    // component: JobCardListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path : '',
        redirectTo: 'feed',
        pathMatch: 'full'
      },
      {
        path: 'feed',
        component: JobMainComponent
      },
        {
          path: 'create',
          component: JobCreateComponent
        }
    ]
  }
];


export const jobRoutes = RouterModule.forChild(routes);

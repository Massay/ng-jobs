import { RouterModule, Routes } from '@angular/router';
import {JobCardComponent, JobCardListComponent, JobItemComponent} from './index';
import { JobCreateComponent } from './job-create/job-create.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { JobMainComponent } from './job-main/job-main.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
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
  },
  {
      path:'our-jobs',
      component: MyJobsComponent
  },
];


export const jobRoutes = RouterModule.forChild(routes);

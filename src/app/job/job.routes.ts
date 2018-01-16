import { RouterModule, Routes } from '@angular/router';
import {JobCardComponent, JobCardListComponent, JobItemComponent} from './index';
import { JobCreateComponent } from './job-create/job-create.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { JobMainComponent } from './job-main/job-main.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { JobMasterComponent } from './job-master/job-master.component';
import   {JobSeekerMainComponent} from '../job-seekers/job-seeker-main/job-seeker-main.component';
export const routes: Routes = [
  {
    path: 'jobs',
    component: JobMasterComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'feed',
        component: JobMainComponent
      },
      {
          path:'job_seekers',
          component: JobSeekerMainComponent
      },
        {
          path: 'create',
          component: JobCreateComponent
        },
        {
          path : '',
          redirectTo: 'feed',
          pathMatch: 'full'
        }
    ]
  },
  {
      path:'our-jobs',
      component: MyJobsComponent
  },
];


export const jobRoutes = RouterModule.forChild(routes);

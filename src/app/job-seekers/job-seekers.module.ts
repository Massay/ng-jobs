import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { JobSeekerItemComponent } from './job-seeker-item/job-seeker-item.component';
import { JobSeekerDetailsComponent } from './job-seeker-details/job-seeker-details.component';
import { JobSeekerMainComponent } from './job-seeker-main/job-seeker-main.component';
import { JobSeekerListComponent } from './job-seeker-list/job-seeker-list.component';

import {JobSeekerService} from '../shared/services/job-seeker.service';

const routes: Routes = [
    
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [JobSeekerItemComponent, JobSeekerDetailsComponent, JobSeekerMainComponent, JobSeekerListComponent],
  exports: [JobSeekerMainComponent],
  providers: [JobSeekerService]
})
export class JobSeekersModule { }

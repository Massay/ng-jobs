import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from './job-item/job-item.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobCardListComponent } from './job-card-list/job-card-list.component';

import {jobRoutes} from './job.routes';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobItemListComponent } from './job-item-list/job-item-list.component';
import { JobMainComponent } from './job-main/job-main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
@NgModule({
  imports: [
    CommonModule, jobRoutes, NgbModule, FormsModule, ReactiveFormsModule, LoadingModule
  ],
  declarations: [JobItemComponent, JobCardComponent,
    JobCardListComponent, JobCreateComponent, JobDetailsComponent,
    JobItemListComponent, JobMainComponent, MyJobsComponent],
  exports : [JobCardListComponent, JobItemListComponent, JobMainComponent]
})
export class JobModule { }

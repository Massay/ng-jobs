import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobItemComponent } from './job-item/job-item.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobCardListComponent } from './job-card-list/job-card-list.component';

import {jobRoutes} from './job.routes';

@NgModule({
  imports: [
    CommonModule, jobRoutes
  ],
  declarations: [JobItemComponent, JobCardComponent, JobCardListComponent],
  exports : [JobCardListComponent]
})
export class JobModule { }

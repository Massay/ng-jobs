import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { JobSeekerItemComponent } from './job-seeker-item/job-seeker-item.component';


const routes: Routes = [
    {
      path:'job_seekers',
      component: JobSeekerItemComponent
    }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [JobSeekerItemComponent]
})
export class JobSeekersModule { }

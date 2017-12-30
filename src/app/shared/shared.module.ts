import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {ShowAuthedDirective} from './directives/show-authed.directive';
import {RouterModule} from '@angular/router';
import { JobResumesIconCardComponent } from './job-resumes-icon-card/job-resumes-icon-card.component';
import { JobResumesIconCardListComponent } from './job-resumes-icon-card-list/job-resumes-icon-card-list.component';

@NgModule({
  imports: [
    CommonModule , RouterModule
  ],
  declarations: [HeaderComponent, ShowAuthedDirective, JobResumesIconCardComponent, JobResumesIconCardListComponent, SectionComponent],
  exports: [HeaderComponent, ShowAuthedDirective, JobResumesIconCardListComponent, SectionComponent]
})
export class SharedModule { }


import {AuthGuard} from './guards/auth.guard';
import {NoAuthGuard} from './guards/no-auth.guard';
import { SectionComponent } from './section/section.component';

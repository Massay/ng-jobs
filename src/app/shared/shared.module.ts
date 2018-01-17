import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {ShowAuthedDirective} from './directives/show-authed.directive';
import {RouterModule, Routes} from '@angular/router';
import { JobResumesIconCardComponent } from './job-resumes-icon-card/job-resumes-icon-card.component';
import { JobResumesIconCardListComponent } from './job-resumes-icon-card-list/job-resumes-icon-card-list.component';
import {AuthGuard} from './guards/auth.guard';
import {NoAuthGuard} from './guards/no-auth.guard';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import {LevelService} from '../shared/services/level.service';
import {TypeService} from '../shared/services/type.service';
import {StatusService} from '../shared/services/status.service';
import {JobService} from '../shared/services/job.service';
import {AddressService} from '../shared/services/address.service';


const routes : Routes = [
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path:'setting',
      component: SettingComponent
    }
]

@NgModule({
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ],
  declarations: [HeaderComponent, ShowAuthedDirective, JobResumesIconCardComponent,
    JobResumesIconCardListComponent, SectionComponent, FooterComponent, ProfileComponent, SettingComponent],
  exports: [HeaderComponent, ShowAuthedDirective, JobResumesIconCardListComponent, SectionComponent, FooterComponent],
  providers: [LevelService,TypeService,StatusService, JobService,AddressService ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {authRouter} from './auth.routes';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountEmployerComponent } from './user-account-employer/user-account-employer.component';
import { UserAccountJobSeekerComponent } from './user-account-job-seeker/user-account-job-seeker.component';
import {SndStepAuthResolverService} from './snd-step-auth-resolver.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule} from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule , authRouter , NgbModule ,
    ReactiveFormsModule, FormsModule, LoadingModule
  ],
  declarations: [
    LoginComponent, RegisterComponent, UserAccountComponent,
    UserAccountEmployerComponent, UserAccountJobSeekerComponent
  ],
  providers: [SndStepAuthResolverService]

})
export class AuthModule { }

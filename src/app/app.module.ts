import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from './shared/services/api.service';
import {JwtService} from './shared/services/jwt.service';
import {CategoryService} from './shared/services/category.service';
import {UserService} from './shared/services/user.service';
import {AuthService} from './shared/services/auth.service';
import {FormDataService} from './shared/services/form-data.service';
// router modules



// imported modules
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {JobModule} from './job/job.module';
import {JobSeekersModule} from './job-seekers/job-seekers.module';
import {AppRoutingModule} from './main.router';


import {CompanyModule} from './company/company.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import {AuthGuard} from './shared/guards/auth.guard';
import {NoAuthGuard} from './shared/guards/no-auth.guard';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import {UserModule} from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule , NgbModule.forRoot() , HttpClientModule , JobSeekersModule,
    SharedModule ,UserModule,
    JobModule , AuthModule, AppRoutingModule, CompanyModule
  ],
  providers: [ApiService, JwtService, CategoryService, UserService, AuthService,
    AuthGuard, NoAuthGuard, FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

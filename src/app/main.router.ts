import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {NoAuthGuard} from './shared/guards/no-auth.guard';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
    canActivate: [NoAuthGuard]
  }
];


@NgModule({
  imports : [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{

}

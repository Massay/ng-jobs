import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {NoAuthGuard} from './shared/guards/no-auth.guard';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [NoAuthGuard]
  }
];


@NgModule({
  imports : [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{

}

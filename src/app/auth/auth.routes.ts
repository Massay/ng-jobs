import {RouterModule, Routes} from '@angular/router';
import {LoginComponent, RegisterComponent} from './index';
import { UserAccountComponent } from './user-account/user-account.component';


import {NoAuthGuard} from '../shared/guards/no-auth.guard';


const routes: Routes = [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard]
      },
      {
          path: 'complete',
          component: UserAccountComponent,
          canActivate: [NoAuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NoAuthGuard]
      }
];


export const authRouter = RouterModule.forChild(routes);

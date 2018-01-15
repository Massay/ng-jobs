import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PasswordComponent } from './password/password.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { MemberPermissionComponent } from './member-permission/member-permission.component';
import {RouterModule, Routes} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path:'user',
    component: IndexComponent,
    children:[
         {
           path: 'profile',
           component: ProfileComponent
         },
         {
           path:'subscriptions',
           component: SubscriptionComponent
         },
         {
            path: 'security',
            component: PasswordComponent
         },
         {
           path:'notification-settings',
           component: NotificationSettingComponent
         },
         {
           path:'members-permission',
           component: MemberPermissionComponent
         },
         {
           path: '',
           redirectTo: 'profile',
           pathMatch: 'full'
         }
        
    ]

  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent, SubscriptionComponent, PasswordComponent, NotificationSettingComponent, MemberPermissionComponent, IndexComponent]
})
export class UserModule { }

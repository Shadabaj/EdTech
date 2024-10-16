import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SubscribedCourseComponent } from './subscribed-course/subscribed-course.component';
import { UserlayoutComponent } from './Shared/userlayout.component';
import { UserheaderComponent } from './Shared/userheader/userheader.component';
import { UserfooterComponent } from './Shared/userfooter/userfooter.component';



@NgModule({
  declarations: [
    UserprofileComponent,
    MyOrderComponent,
    UserdashboardComponent,
    SubscribedCourseComponent,
    UserlayoutComponent,
    UserheaderComponent,
    UserfooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }

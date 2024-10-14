import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CoursesComponent } from './courses/courses.component';
import { PubliclayoutComponent } from './Shared/publiclayout.component';
import { PublicHeaderComponent } from './Shared/public-header/public-header.component';
import { PublicFooterComponent } from './Shared/public-footer/public-footer.component';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent,
    CoursesComponent,
    PubliclayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

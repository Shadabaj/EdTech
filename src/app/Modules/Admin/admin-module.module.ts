import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminLayoutComponent } from './Shared/admin-layout.component';
import { AdminHeaderComponent } from './Shared/admin-header/admin-header.component';
import { AdminFooterComponent } from './Shared/admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminRoutingModule } from './Admin-routing.module';



@NgModule({
  declarations: [
    AdminDashBoardComponent,
    AdminProfileComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    CoursesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

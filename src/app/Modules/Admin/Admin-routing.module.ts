import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Shared/admin-layout.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path :'',component:AdminLayoutComponent,children:[
  {path:'',component:AdminDashBoardComponent},
  {path:'Admin/Courses',component:CoursesComponent},
  {path:'Admin/Categories',component:CategoriesComponent}

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

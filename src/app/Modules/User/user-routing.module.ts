import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlayoutComponent } from './Shared/userlayout.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


const routes: Routes = [
  {path:'',component:UserlayoutComponent,children:[
  {path:'',component:UserdashboardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './Modules/public/public.module';
import { AdminAuthGuard } from './Guards/admin-gaurd.guard';
import { UserAuthGuard } from './Guards/user-gaurd.guard';


const routes: Routes = [
  {path:'Admin',canActivate:[AdminAuthGuard],loadChildren:()=>import('./Modules/Admin/admin-module.module').then(a=>a.AdminModule)},
  {path:'User',canActivate:[UserAuthGuard],loadChildren:()=>import('./Modules/User/user-module.module').then(u=>u.UserModule)},
  {path:'',loadChildren:()=>PublicModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

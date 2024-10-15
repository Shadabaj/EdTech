import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './Modules/public/public.module';

const routes: Routes = [
  {path:'Admin',loadChildren:()=>import('./Modules/Admin/admin-module.module').then(a=>a.AdminModule)},
  {path:'User',loadChildren:()=>import('./Modules/User/user-module.module').then(u=>u.UserModuleModule)},
  {path:'',loadChildren:()=>PublicModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

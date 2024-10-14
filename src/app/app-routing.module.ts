import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './Modules/public/public.module';

const routes: Routes = [

  {path:'',loadChildren:()=>PublicModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

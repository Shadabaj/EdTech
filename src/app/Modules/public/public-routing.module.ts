import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubliclayoutComponent } from './Shared/publiclayout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [

  {path:'',component:PubliclayoutComponent, children:[
    {path:'',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'SignUp',component:SignUpComponent},
    {path:'**',component:NotfoundComponent}
 
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubliclayoutComponent } from './Shared/publiclayout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SignUpComponent } from './sign-up/sign-up.component';




const routes: Routes = [

    {path:'',component:PubliclayoutComponent, children:[
    {path:'',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'SignUp',component:SignUpComponent},
    {path:'UnAuthoorized',component:UnauthorizedComponent},
    {path:'**',component:NotfoundComponent}
 
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

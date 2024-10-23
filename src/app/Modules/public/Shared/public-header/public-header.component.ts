import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styles: [
  ]
})

export class PublicHeaderComponent {
 
  user:User | undefined;
  cart:Cart ;

constructor(private _authservice:AuthService,private _router:Router,private _cartservice :CartService) 
{
this.user=this._authservice.user;
this.cart=this._cartservice.getCart();
}


SignOut()
{
  this._authservice.RemoveAuthUser();
  this.user==undefined;
  this._router.navigate(['/Login']);
}

}

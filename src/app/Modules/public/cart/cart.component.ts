import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {
  cart: Cart;
  user: User | undefined;

  constructor(private _cartService: CartService, private _authService: AuthService, private _router: Router) {
    this.cart = _cartService.getCart();
    this.user = _authService.user;
  }


  DeleteItem(id: number) {
    if (confirm(`Are You Sure Want to Delete`)) {
      this._cartService.deleteItem(id);
      this.cart=this._cartService.getCart();
    }
  }


  checkOut() {
    if (this.user != undefined) {
      this.cart.userId = this.user.id;
      //console.log(this.cart);
      this._cartService.saveCartToDb(this.cart).subscribe(res => {
        if (res.status == 200 && res.body == true) {
          this._router.navigate(['/payment']);
        }
      });
    }
    else {
      this._router.navigate(['/Login'], { queryParams: { returnUrl: '/cart' } });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/Cart';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: [
  ]
})
export class PaymentComponent implements OnInit {
cart:Cart | any;


constructor(private _cartService:CartService) 
{ }

ngOnInit(): void {
  this.cart=this._cartService.getCart();
}


}

import { Injectable } from '@angular/core';
import { Cart } from '../Models/Cart';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Cartitem } from '../Models/Cartitem';
import { UtilService } from './UtilService.service';
import { CART_ID } from '../app.constant';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart;

  private httpheaders: HttpHeaders;

  constructor(private _utilservice: UtilService, private _httpclient: HttpClient) 
  {
    this.cart = new Cart();
    this.httpheaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  addToCart(itemId: number, name: string, imageUrl: string, UnitPrice: number, Quantity: number) 
  {
    if (Quantity != undefined) {
      const item = new Cartitem(itemId, name, imageUrl, UnitPrice, Quantity);
      this.cart.items.push(item);
      this.CalculateCart();
      this.saveCart();
    }
  }

  CalculateCart(): void 
  {
    let price = 0;
    for (let i = 0; i < this.cart.items.length; i++) {
      const item: Cartitem = this.cart.items[i];
      this.cart.items[i].total = item.Quantity * item.unitPrice;
      price = price + this.cart.items[i].total;

    }
    this.cart.total = price;
    this.cart.tax = Math.round((price * this.cart.taxRate) / 100);
    this.cart.grandTotal = this.cart.total + this.cart.tax;
  }

  saveCart(): void 
  {
    let encData = this._utilservice.Encrypt(this.cart.items);
    localStorage.setItem(this.cart.id, encData);
    console.log(`savecart ${encData}`);
  }

  

  getCart(): Cart 
  {
    const data = localStorage.getItem(this.cart.id);
    console.log( 'GetCart'+ localStorage.getItem(CART_ID)); // Check if data exists and is valid

    if (data != undefined && data != null) {
      this.cart.items = this._utilservice.Decrypt(data);
      this.CalculateCart();
    }
    return this.cart;
  }

//   getCart(): Cart {
//     const data = localStorage.getItem(this.cart.id);
//     console.log('GetCart - Encrypted Data:', data); // Log the retrieved data

//     if (data) 
//       {  
//         // Simplified check; this covers both undefined and null
//         const decryptedData = this._utilservice.Decrypt(data);
//         if (decryptedData) {
//             this.cart.items = decryptedData;
//             this.CalculateCart();
//         } else {
//             console.error('Decryption failed: Decrypted data is null or invalid.');
//         }
//     } else {
//         console.warn('No data found in localStorage for CART_ID.');
//     }

//     return this.cart;
// }


  removeCart() 
  {
    localStorage.removeItem(this.cart.id);  //for the removeval of the cart id corressposding to the item id
    localStorage.removeItem(CART_ID);  //for the cart
  }


  deleteItem(id: number) {
    for (let i = 0; i < this.cart.items.length; i++) {
      const item = this.cart.items[i];
      if (item.ItemId == id) {
        this.cart.items.splice(i, 1);
      }
    }
    this.CalculateCart();
    this.saveCart();
  }

  saveCartToDb(cart: Cart): Observable<HttpResponse<any>> 
  {
    return this._httpclient.post<HttpResponse<any>>(environment.apiAddress + "/Cart/SaveCart", JSON.stringify(cart), {
      headers: this.httpheaders,
      observe: 'response'
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) 
  {
    console.error('An Error Occured', error.error);
    return throwError(() => new Error('Something Bad Happend Please Try Again'));
  }



}

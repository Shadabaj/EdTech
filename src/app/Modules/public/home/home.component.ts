import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/Models/Catalog';
import { CartService } from 'src/app/Services/cart.service';
import { CatalogServiceService } from 'src/app/Services/catalog-service.service';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  CatalogList: Catalog[] | undefined;
  message: string | undefined;

  constructor(private _catalogueservice: CatalogServiceService, private _cartservice: CartService) { }


  ngOnInit(): void {
    this._catalogueservice.GetCatalague().subscribe(res => {
      if (res.body != null) {
        this.CatalogList = res.body;
      }
    });
  }

  AddToCart(id: number, name: string, unitPrice: number, Quantity: number, image: string) {
    this._cartservice.addToCart(id, name, image, unitPrice, Quantity);
    this.message = `<strong>${name}</strong> added to <a href='/cart'>Cart</a> successfully!`;

    $('#toastCart').toast('show');
    setTimeout(function () {
      $('#toastCart').toast('hide');
    }, 4000);
  }

}

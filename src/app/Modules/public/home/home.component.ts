import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/Models/Catalog';
import { CatalogServiceService } from 'src/app/Services/catalog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  CatalogList: Catalog[] | undefined;

  constructor(private _catalogueservice: CatalogServiceService) { }


  ngOnInit(): void {
    this._catalogueservice.GetCatalague().subscribe(res => {
      if (res.body != null) {
        this.CatalogList = res.body;
      }
    });
  }

}

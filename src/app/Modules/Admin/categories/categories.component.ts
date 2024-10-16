import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent implements OnInit {
  categories: category[] | undefined;

  constructor(private _categoryservice: CategoryService) { }

  ngOnInit(): void 
  {
    this._categoryservice.GetCategories().subscribe(res => {
      if (res.body != undefined) {
        this.categories = res.body
      }
    })
  }

}

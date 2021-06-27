import { ProductListComponent } from './product-list/product-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('productList',{static:true}) productList: ProductListComponent

  title = 'homework17to20';

  ngOnInit(): void {
    this.productList.products = [
      {
      name: 'ส้มโอ',
      price: 111
      },
      {
      name: 'แตงโม',
      price: 222
      },
      {
      name: 'มะพร้าวนํ้าหอม',
      price: 333
      }
      ];
    }

    constructor() {  }

}

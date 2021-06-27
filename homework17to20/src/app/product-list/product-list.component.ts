import { Product } from './../models/product';
import { Input, QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  @ViewChildren(ProductItemComponent,{read: false})  productItems: QueryList<ProductItemComponent>;

  products: Product[];
  constructor() {
    this.products = [];
  }

  ngOnInit() {}
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {p.isSelected=false});
    productComponent.isSelected = true;
    }

}

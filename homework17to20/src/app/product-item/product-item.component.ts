import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product

  @Output()
  OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();
  constructor() { }

  isSelected: boolean;

  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit(this);
    }

}

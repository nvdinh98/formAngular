import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 12'
    },
    {
      id: 2,
      name: 'Iphone 13'
    },
    {
      id: 3,
      name: 'Iphone 14'
    },

  ]

  isShowCreateForm = false;
  isShowEditForm = false;

  index = -1;

  changeStatus() {
    this.isShowCreateForm = !this.isShowCreateForm;
  }

  constructor() {
  }

  ngOnInit() {
  }

  addNewProduct(product) {
    this.products.push(product);
  }

  showEditForm(i: number) {
  this.isShowEditForm = !this.isShowEditForm;
  this.index = i;
  }
  editProduct(product){
this.products[this.index] = product;
  }
}

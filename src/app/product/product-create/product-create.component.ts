import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Input()
  title: string = 'Product Create Form';
  // product: Product ={};
  @Output()

  eventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  submit(product) {
    this.eventEmitter.emit(product);
  }

  constructor() {
  }

  ngOnInit() {
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input()
  product: Product;

  constructor(private productsService: ProductService){

  }

  save(): void {
    this.productsService.update(this.product)
      .subscribe(
        response => {console.log(response)},
        err => { console.log(err)});
  }

}

import { Component } from '@angular/core';
import {ProductService} from './service/product.service';
import  {Product} from './models/product';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "los productos del Año";

  selected: Product;

  products: Product[];

  constructor(private productService: ProductService) {

  }

  getProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.log(error);
      }
    )    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product){
    this.selected = product;
  }

  add(name: string): void {   
   
    if (!name) { return; }
    this.productService.create(name)
      .map(product => {
        this.products.push(product);
        this.selected = null;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
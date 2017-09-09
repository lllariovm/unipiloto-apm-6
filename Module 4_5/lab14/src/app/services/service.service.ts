import { Injectable } from '@angular/core';
import {PRODUCTS} from "../mock/product-mock";
import {STUDENTS} from "../mock/student-mock";

@Injectable()
export class ProductsService {

  getProducts(){
    return Promise.resolve(PRODUCTS);
  }

}

@Injectable()
export class StudentsService {

  getStudents(){
    return Promise.resolve(STUDENTS);
  }

}

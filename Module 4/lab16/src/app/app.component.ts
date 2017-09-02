import { Component } from '@angular/core';
//import {ProductService} from './service/product.service';
import {TeacherService} from './service/teacher.service';
import  {Product} from './models/product';
import  {Teacher} from './models/teacher';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title: string = "Teachers";

    selected: Product;
    selected_teacher: Teacher;

    products: Product[];
    teachers: Teacher[];

    constructor( private teacherService: TeacherService) {

    }

    /*getProducts() {
        this.productService.getProducts().then(products => this.products = products);
    }*/

    getTeachers(){
        this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
    }

    ngOnInit(): void {
        //this.getProducts();
        this.getTeachers();
    }

    /*onSelect(product: Product) {
        this.selected = product;
    }*/

    onSelectTeacher(teacher: Teacher) {
        this.selected_teacher = teacher;
    }
}

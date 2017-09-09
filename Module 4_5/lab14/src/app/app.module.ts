import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductsService} from "./services/service.service";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {StudentsService} from "./services/service.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent,
    StudentsComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    StudentsService,
    {
      provide: APP_BASE_HREF, useValue : '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

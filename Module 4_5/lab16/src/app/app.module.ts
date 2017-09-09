import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryProductService } from './mock/in-memory-product.service';
import { InMemoryTeacherService } from './mock/in-memory-teacher.service';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { TeacherService } from './service/teacher.service';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // InMemoryWebApiModule.forRoot(InMemoryProductService),
    InMemoryWebApiModule.forRoot(InMemoryTeacherService)
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
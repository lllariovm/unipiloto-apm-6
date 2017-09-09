import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherDetailComponent } from './teachers/detailteacher/teacher-detail-component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './students/detailstudent/student-detail-component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverDetailComponent } from './drivers/detaildriver/driver-detail-component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicles/detailvehicle/vehicle-detail-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    TeacherDetailComponent,
    StudentsComponent,
    StudentDetailComponent,
    DriversComponent,
    DriverDetailComponent,
    VehiclesComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
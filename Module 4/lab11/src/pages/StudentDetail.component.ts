import { Component, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: './studentdetail.component.html'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}
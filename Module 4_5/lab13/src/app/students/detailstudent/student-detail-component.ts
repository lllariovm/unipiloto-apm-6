import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student';

@Component({
  selector: 'student-detail-component',
  templateUrl: './student-detail-component.html'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}
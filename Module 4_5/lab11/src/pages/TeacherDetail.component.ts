import { Component, Input } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacherdetail.component.html'
})

export class TeacherDetailComponent {
  @Input()
  teacher: Teacher;
}
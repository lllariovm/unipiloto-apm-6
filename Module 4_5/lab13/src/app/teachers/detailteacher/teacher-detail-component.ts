import { Component, Input } from '@angular/core';
import { Teacher } from '../../../models/teacher';

@Component({
  selector: 'teacher-detail-component',
  templateUrl: './teacher-detail-component.html'
})

export class TeacherDetailComponent {
  @Input()
  teacher: Teacher;
}
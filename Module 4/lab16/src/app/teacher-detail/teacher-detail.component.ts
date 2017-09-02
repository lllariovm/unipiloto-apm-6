import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent {

	@Input()
    teacher: Teacher;

}

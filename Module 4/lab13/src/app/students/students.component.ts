import { Component, OnInit } from '@angular/core';
import {Student} from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  student_selected: Student;
  students: Student[] = STUDENTS;

  constructor() { }

  ngOnInit() {
  }

  onSelectStudent(student: Student){
  
    this.student_selected = student;
  }

}

const STUDENTS: Student[] = [
  {
    id: 12,
    age: 27,
    name: 'Jaime',
    lastname: 'Valencia',
  },
  {
    id: 35,
    age: 21,
    name: 'Carlos',
    lastname: 'Sepulveda',
  },
  {
    id: 23,
    age: 26,
    name: 'Camilo',
    lastname: 'Garcia',
  }
];

import { Component } from '@angular/core';
import {Student} from '../models/student';
import {Teacher} from '../models/teacher';

const TEACHERS: Teacher[] = [
  {
    id: 213,
    age: 20,
    name: 'Marlon',
    lastname: 'Lopez',
    profesion: 'Ingeniero',
    grade: [1,2,3,4],
    groups: ['a','b','c']
  },
  {
    id: 214,
    age: 21,
    name: 'Jose',
    lastname: 'Arias',
    profesion: 'Ingeniero',
    grade: [1,3,4],
    groups: ['b','c']
  },
  {
    id: 215,
    age: 26,
    name: 'Leo',
    lastname: 'Garcia',
    profesion: 'Veterinario',
    grade: [4],
    groups: ['a','b']
  }
];

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



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "los productos del Año";

  teacher_selected: Teacher;
  student_selected: Student;

  teachers: Teacher[] = TEACHERS;
  students: Student[] = STUDENTS;

  onSelectTeacher(teacher: Teacher){
    this.teacher_selected = teacher;
    
  }

  onSelectStudent(student: Student){
  
    this.student_selected = student;
  }
}
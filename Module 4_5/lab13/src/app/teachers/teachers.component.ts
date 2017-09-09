import { Component, OnInit, Input } from '@angular/core';
import {Teacher} from '../models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html'
})

export class TeachersComponent implements OnInit {
  
  teacher_selected: Teacher;
  teachers: Teacher[] = TEACHERS;

  constructor() { }

  ngOnInit() {

  }
  
  onSelectTeacher(teacher: Teacher){
    this.teacher_selected = teacher;
  }
}

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
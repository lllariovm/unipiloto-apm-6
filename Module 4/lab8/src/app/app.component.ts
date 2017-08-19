import { Component } from '@angular/core';

export class Person{
  id: number;
  age: number;
  name: string;
  lastname: string;
}

export class Teacher extends Person{
  profesion: string;
  grade: [number];
  groups: [string];  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "los productos del Año";

  selected: Teacher;

  teacher: Teacher[] = TEACHERS;

  onSelect(teacher: Teacher){
    this.selected = teacher;
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
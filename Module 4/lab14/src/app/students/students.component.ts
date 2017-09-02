import {Component, OnInit} from '@angular/core';
import {Student} from "../models/student";
import {StudentsService} from "../services/service.service";

@Component({
  selector: 'student-list-app',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
  title: string = "los estudiantes del Año";

  selected: Student;

  students: Student[];

  constructor(private studentsService: StudentsService) {

  }

  getStudents() {
    this.studentsService.getStudents().then(students => this.students = students);
    
  }

  ngOnInit(): void {
    this.getStudents();
  }


  onSelect(student: Student){
    this.selected = student;
  }
}


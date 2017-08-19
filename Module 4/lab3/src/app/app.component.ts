import { Component } from '@angular/core';

export class Person{
	id: number;
	age: number;
	name: string;
	lastname: string;

	constructor(id: number, age: number, name: string, lastname: string){
		this.id = id;
		this.age = age;
		this.name = name;
		this.lastname = lastname;
	}

	setId(id: number): void{
		this.id = id;
	}

	getId(): number{
		return this.id;
	}

	setAge(age: number): void{
		this.age = age;
	}

	getAge(): number{
		return this.age;
	}

	setName(Name: string): void{
		this.name = name;
	}

	getName(): string{
		return this.name;
	}

	setlastName(lastname: string): void{
		this.lastname = lastname;
	}

	getlastName(): string{
		return this.lastname;
	}
}

export class Student extends Person{
	clases: [string]
	grade: number;
	group: string; 

	constructor (id: number, age: number, name: string, lastname: string, clases: [string], grade: number, group: string) {
		super(id, age, name, lastname);

		this.clases = clases;
		this.grade = grade;
		this.group = group;
	}

	setClases(clases: [string]): void{
		this.clases = clases;
	}

	getClases(): [string]{
		return this.clases;
	}

	setGrade(grade: number): void{
		this.grade = grade;
	}

	getGrade(): number{
		return this.grade;
	}

	setGroup(group: string): void{
		this.group = group;
	}

	getGroup(): string{
		return this.group;
	}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
	
	title: string = "Estudiantes";
	estudiante: Student = new Student(213, 20, 'Jose', 'Arias', ['Calculo', 'Fisica'], 1, 'a');	
}

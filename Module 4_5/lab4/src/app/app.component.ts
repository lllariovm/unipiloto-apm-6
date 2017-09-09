interface Person {
	id: number;
	age: number;
	name: string;
	lastname: string;

	getId(): number;
	getAge(): number;
	getName(): string;
	getlastName(): string;

	setId(id: number): void;
	setAge(age: number): void;
	setlastName(lastname: string): void;
} 

export class Student implements Person{
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


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Person';
  person = new Student(4, 20, 'Pepe', 'Rodriguez');
}

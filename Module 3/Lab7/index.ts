class Person{
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

class Student extends Person{
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

class Teacher extends Person{
	profesion: string
	grade: [number];
	groups: [string];
	studens: Array<Student>;

	constructor (id: number, age: number, name: string, lastname: string, profesion: string, grade: [number], groups: [string]) {
		super(id, age, name, lastname);

		this.profesion = profesion;
		this.grade = grade;
		this.groups = groups;
		this.studens = [];
				
	}

	setProfesion(profesion: string): void{
		this.profesion = profesion;
	}

	getProfesion(): string{
		return this.profesion;
	}

	setGrade(grade: [number]): void{
		this.grade = grade;
	}

	getGrade(): [number]{
		return this.grade;
	}

	setGroups(groups: [string]): void{
		this.groups = groups;
	}

	getGroups(): [string]{
		return this.groups;
	}

	setStudents(studens: Array<Student>): void{
		this.studens = studens;
	}

	getStudents(): Array<Student>{
		return this.studens;
	}
}


// (id: number, age: number, name: string, lastname: string, clases: [string], grade: number, group: string)
var jose = new Student(213, 20, 'Jose', 'Arias', ['Calculo', 'Fisica'], 1, 'a');
var samuel = new Student(214, 22, 'Samuel', 'Valencia', ['Programacion', 'Matematicas'], 3,'b');
var pepe = new Student(215, 21, 'Pepe', 'Morales', ['Salud', 'Medicina'], 4,'c');



var marlon = new Teacher(213, 20, 'Marlon', 'Lopez', 'Ingeniero', [1,2,3,4], ['a', 'b','c','d']);

marlon.studens.push(jose);
marlon.studens.push(samuel)
marlon.studens.push(pepe)

var oscar = new Teacher(214, 22, 'Oscar', 'Osorio', 'Arquitecto', [1,3], ['b','c',]);
oscar.studens.push(jose);
oscar.studens.push(samuel);
oscar.studens.push(pepe);

var camilo = new Teacher(215, 21, 'Alberto', 'Yepes', 'Veterinario', [2,3,4], ['a', 'b']);
camilo.studens.push(jose);
camilo.studens.push(samuel);
camilo.studens.push(pepe);



console.log(marlon);
console.log(oscar);
console.log(camilo);
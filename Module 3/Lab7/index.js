var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(id, age, name, lastname) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.lastname = lastname;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setName = function (Name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setlastName = function (lastname) {
        this.lastname = lastname;
    };
    Person.prototype.getlastName = function () {
        return this.lastname;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, age, name, lastname, clases, grade, group) {
        _super.call(this, id, age, name, lastname);
        this.clases = clases;
        this.grade = grade;
        this.group = group;
    }
    Student.prototype.setClases = function (clases) {
        this.clases = clases;
    };
    Student.prototype.getClases = function () {
        return this.clases;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.setGroup = function (group) {
        this.group = group;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, age, name, lastname, profesion, grade, groups) {
        _super.call(this, id, age, name, lastname);
        this.profesion = profesion;
        this.grade = grade;
        this.groups = groups;
        this.studens = [];
    }
    Teacher.prototype.setProfesion = function (profesion) {
        this.profesion = profesion;
    };
    Teacher.prototype.getProfesion = function () {
        return this.profesion;
    };
    Teacher.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Teacher.prototype.getGrade = function () {
        return this.grade;
    };
    Teacher.prototype.setGroups = function (groups) {
        this.groups = groups;
    };
    Teacher.prototype.getGroups = function () {
        return this.groups;
    };
    Teacher.prototype.setStudents = function (studens) {
        this.studens = studens;
    };
    Teacher.prototype.getStudents = function () {
        return this.studens;
    };
    return Teacher;
}(Person));
// (id: number, age: number, name: string, lastname: string, clases: [string], grade: number, group: string)
var jose = new Student(213, 20, 'Jose', 'Arias', ['Calculo', 'Fisica'], 1, 'a');
var samuel = new Student(214, 22, 'Samuel', 'Valencia', ['Programacion', 'Matematicas'], 3, 'b');
var pepe = new Student(215, 21, 'Pepe', 'Morales', ['Salud', 'Medicina'], 4, 'c');
var marlon = new Teacher(213, 20, 'Marlon', 'Lopez', 'Ingeniero', [1, 2, 3, 4], ['a', 'b', 'c', 'd']);
marlon.studens.push(jose);
marlon.studens.push(samuel);
marlon.studens.push(pepe);
var oscar = new Teacher(214, 22, 'Oscar', 'Osorio', 'Arquitecto', [1, 3], ['b', 'c',]);
oscar.studens.push(jose);
oscar.studens.push(samuel);
oscar.studens.push(pepe);
var camilo = new Teacher(215, 21, 'Alberto', 'Yepes', 'Veterinario', [2, 3, 4], ['a', 'b']);
camilo.studens.push(jose);
camilo.studens.push(samuel);
camilo.studens.push(pepe);
console.log(marlon);
console.log(oscar);
console.log(camilo);

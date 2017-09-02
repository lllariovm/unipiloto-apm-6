import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Teacher} from "../models/teacher";
import {Product} from "../models/product";

export class InMemoryTeacherService implements InMemoryDbService {
	createDb() {
		let teachers: Array<Teacher> = [
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

		let products: Array<Product> = [
	      {
	        id: 1,
	        name: "Samsung galaxy 8",
	        description: "telefono que explota",
	        type: "smartphone",
	        price: 1500000,
	        quantity: 20
	      },
	      {
	        id: 2,
	        name: "Samsung galaxy 10",
	        description: "telefono que explota",
	        type: "smartphone",
	        price: 1500000,
	        quantity: 20
	      },
	      {
	        id: 3,
	        name: "Samsung galaxy 20",
	        description: "telefono que explota",
	        type: "smartphone",
	        price: 1500000,
	        quantity: 20
	      }
	    ];
		return {teachers, products};
	}
}
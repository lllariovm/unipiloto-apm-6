import { Component } from '@angular/core';

export class Vehicle{
  id: number;
  brand: string;
  model: string;
  color: string;
  plate: string;
  capacity: string;
  build_year: string;
}

export class Driver{
  id: number;
  license: number;
  first_name: string;
  last_name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Concesionario';

  selected: Vehicle;
  vehicle: Vehicle[] = VEHICLES;

  driver_selected: Driver;
  driver: Driver[] = DRIVERS;

  onSelect(vehicle: Vehicle, driver: Driver){
    this.selected = vehicle;
    this.driver_selected = driver;
  } 
}

const DRIVERS: Driver[] = [
  {
	  id: 1,
	  license: 8668,
	  first_name: 'Pepito',
	  last_name: 'Perez',
	  age: 33,
	},

	 {
	  id: 2,
	  license: 76876,
	  first_name: 'Jose',
	  last_name: 'Arias',
	  age: 30,
	},
	 {
	  id: 3,
	  license: 876976,
	  first_name: 'Fernando',
	  last_name: 'Castaño',
	  age: 30,
	},
];

const VEHICLES: Vehicle[] = [
  {
	  id: 1,
	  brand: 'Toyota',
	  model: 'Land Cruiser',
	  color: 'Red',
	  plate: 'XCR392',
	  capacity: '5',
	  build_year: '2016',
  },
  {
	  id: 2,
	  brand: 'Chevrolet',
	  model: 'Captiva',
	  color: 'Blue',
	  plate: 'GDW497',
	  capacity: '5',
	  build_year: '2017',
  },
  {
      id: 3,
	  brand: 'Ford',
	  model: 'Edge',
	  color: 'Black',
	  plate: 'FKY538',
	  capacity: '5',
	  build_year: '2017',
  },
  {
      id: 4,
	  brand: 'Reanult',
	  model: 'Clio',
	  color: 'Black',
	  plate: 'FHO453',
	  capacity: '4',
	  build_year: '2016',
  }
];

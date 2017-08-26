import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
 
  selected: Vehicle;
  vehicles: Vehicle[] = VEHICLES;

  constructor() { }

  ngOnInit() {
  }

  onSelectVehicle(vehicle: Vehicle){   
    this.selected = vehicle;
   }
}

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

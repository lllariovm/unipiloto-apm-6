import { Component, OnInit } from '@angular/core';
import {Driver} from '../models/driver';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {
	
  selected: Driver;
  drivers: Driver[] = DRIVERS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(driver: Driver){    
    this.selected = driver;
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

interface Vehicle {
	wheel: number;
	fuel: string;
	color: string;

	getWheel(): number;
	getFuel(): string;
	getColor(): string;

	setWheel(wheel:number): void;
	setFuel(fuel:string): void;
	setColor(color:string): void;
} 

class Car implements Vehicle {
	wheel: number;
	fuel: string;
	color: string;

	constructor(wheel: number, fuel: string, color: string){
		this.color = color;
		this.fuel = fuel;
		this.wheel = wheel;
	}

	getWheel(): number{
		return this.wheel;
	};

	setWheel(nid: number): void{
		this.wheel = wheel;
	}

	getFuel(): string{
		return this.fuel;
	};

	setFuel(nid: string): void{
		this.fuel = fuel;
	}

	getColor(): string{
		return this.color;
	};

	setColor(nid: string): void{
		this.color = color;
	}


}
var car = new Car(4,'Gasolina', 'Red');

console.log(car);

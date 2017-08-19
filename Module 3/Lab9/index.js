var Car = (function () {
    function Car(wheel, fuel, color) {
        this.color = color;
        this.fuel = fuel;
        this.wheel = wheel;
    }
    Car.prototype.getWheel = function () {
        return this.wheel;
    };
    ;
    Car.prototype.setWheel = function (nid) {
        this.wheel = wheel;
    };
    Car.prototype.getFuel = function () {
        return this.fuel;
    };
    ;
    Car.prototype.setFuel = function (nid) {
        this.fuel = fuel;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    ;
    Car.prototype.setColor = function (nid) {
        this.color = color;
    };
    return Car;
}());
var car = new Car(4, 'Gasolina', 'Red');
console.log(car);

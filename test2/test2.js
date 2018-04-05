//make Car class with prototype
function Car1(id, make, model, year, price) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
}

Car1.prototype = {
    constructor: Car1,
    toString: function() {
        console.log('=> ' + this.id + ' - ' + this.make + ' - ' + this.model + ' - ' + this.year + ' - ' + this.price);
    }
}


//make Car class with keyword 'class' of ES6
class Car2 {
    constructor(id, make, model, year, price) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    toString() {
        console.log(`=> ${this.id} - ${this.make} - ${this.model} - ${this.year} - ${this.price}`);
    }
}

//make CarInventory class with keyword 'class' of ES6
class CarInventory {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }

    removeCar(id) {
        this.cars.forEach((item, index) => {
            if(id == item.id) {
                this.cars.splice(index, 1);
            }
        });
    }
    
    getAmount() {
        return this.cars.length;
    }

    showCars() {
        this.cars.forEach((item, index) => {
            item.toString();
        });
    }
}

/*------------
Testing
--------------*/
let car1 = new Car1(1, 'Toyota', 'Camry', 2017, 10000);
let car2 = new Car2(2, 'Hyundai', 'Sonata', 2018, 11000);
let car3 = new Car2(3, 'KIA', 'Morning', 2018, 5000);
let inventory = new CarInventory();

inventory.addCar(car1);
inventory.addCar(car2);
inventory.addCar(car3);

console.log(inventory.getAmount());
inventory.showCars();
inventory.removeCar(car3.id);
console.log(inventory.getAmount());
inventory.showCars();
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        const honk = function() {
            return "Beep!";
        }
        const toString = function() {
            return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
        }
    };

}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(this.make, this.model, this.year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(this.make, this.model, this.year);
        this.numWheels = 2;
        const RevEngine = function() {
            return "VROOM!";
        }
    }
}

class Garage extends Vehicle {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry we're full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}
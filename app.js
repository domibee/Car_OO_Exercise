//part 1

class Vehicle {
    constructor (make,year,model){
        this.a = make;
        this.b = year; 
        this.c = model;
    }
    
    honk() {
        return ('Beep');
    }
    toString() {
        return (`The vehicle is a ${this.a} ${this.b} from ${this.c}`);
    }
}

//part 2

class Car extends Vehicle {
    constructor (make,year,model){
    super(make,year,model);
    this.numWheels = 4;
    }
}
//part 3

class Motorcycle extends Vehicle {
    constructor (make,year,model){
        super(make,year,model);
        this.numWheels = 2;
    }
    revEngine () {
        return ('VROOM!!!!');
    }
}

//part 4

class Garage {
    constructor (capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry,we're full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}
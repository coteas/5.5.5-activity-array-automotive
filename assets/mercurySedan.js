class Car extends Vehicle {
    constructor(maxPassenger, passengers, numberOfWheels, 
        maximumSpeed, fuel, scheduledService) {
        super(make, model, year, color, mileage);
        this.maxPassenger = 5;
        this.passengers = 0;
        this.fuel = 10;
        this.scheduledService = false;        
        this.timeForMaintenance = false;
        this.speed = 0;
        this.started = false;
        this.numberOfWheels = 4;
    }

    loadPassenger(){
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    
    scheduledService(){
        if (this.mileage > 30000) {
            return this.timeForMaintenance = true;
            console.log("No maintenance required...");
        } else {
            return this.timeForMaintenance = false;
            console.log("Maintenance required...");
        }
    }
    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}
//this shows how to call from this module...
let v = new Vehicle.Car("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:

// Factory para gestionar tipos de vehículos
//gestionamos la reutilizacion de los tipos de vehículos compartidos con el patron Flyweight
import { VehicleType } from './vehicleType.js';

export class VehicleFactory {
    constructor() {//The following will optimize the usage of memory in case there are many vehicles in the simulator. 
        this.vehicleTypes = {};
    }

    getVehicleType(color, engine, brand) {// individually saving velocities and positions for each instace of the vehicle
        const key = `${color}-${engine}-${brand}`;
        //here we check if the type of vehicle already exists, if not we create a new one
        if (!this.vehicleTypes[key]) {
            console.log(`Creando nuevo tipo de vehículo: ${key}`);
            this.vehicleTypes[key] = new VehicleType(color, engine, brand);
        } else {
            console.log(`Reutilizando tipo de vehículo existente: ${key}`);
        }
        
        return this.vehicleTypes[key];
    }

    getCount() {
        return Object.keys(this.vehicleTypes).length;
    }
}
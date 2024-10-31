import { Vehicle } from './vehicle.js';
import { VehicleFactory } from './vehicleFactory.js';

export class TrafficSimulator {// within the TrafficSimulator class we simulate the traffic in the city 
    constructor() {
        this.factory = new VehicleFactory();
        this.vehicles = [];
        console.log('Iniciando simulador de tráfico de la ciudad...\n');
    }

    crearVehiculo(color, motor, marca, posX, posY, velocidad) {////individually saving velocities and positions for each instace of the vehicle
        const tipo = this.factory.getVehicleType(color, motor, marca);
        const vehiculo = new Vehicle(tipo, posX, posY, velocidad);
        this.vehicles.push(vehiculo);
        return vehiculo;
    }

    iniciarSimulacion() {
        console.log('\n=== Iniciando simulación de tráfico ===');
        console.log(`Vehículos activos: ${this.vehicles.length}`);
        console.log(`Tipos únicos de vehículos: ${this.factory.getCount()}\n`);
        
        this.vehicles.forEach(vehiculo => vehiculo.moverVehiculo());
    }
}
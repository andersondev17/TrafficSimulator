import { TrafficSimulator } from './TrafficSimulator.js';

function ejecutarSimulacion() {
    const simulador = new TrafficSimulator();

    // Crear diferentes tipos de vehículos
    simulador.crearVehiculo("Rojo", "Eléctrico", "Tesla", 0, 1, 80);
    simulador.crearVehiculo("Rojo", "Eléctrico", "Tesla", 10, 2, 75);
    simulador.crearVehiculo("Azul", "Diesel", "Mercedes", 20, 1, 60);

    // Ejecutar la simulación
    simulador.iniciarSimulacion();

    // Mostrando mensaje diciente en la consola 
    console.log('\n=== Estadísticas de memoria ===');
    console.log(`Tipos de vehículos en memoria: ${simulador.factory.getCount()}`);
    console.log('Fin. Muchas gracias!.\n');
}

// Ejecutar la simulación
ejecutarSimulacion();

/*
2.Pregunta Práctica (2,5 unidades):
Flyweight: 
Desarrolla una aplicación de simulación de tráfico para una ciudad. 
En el simulador, cada vehículo  (carro, autobús, bicicleta) tiene características similares (color, tipo de motor, marca) 
pero  diferentes posiciones y velocidades. 
Usa el patrón Flyweight para compartir la información estática  de los vehículos (color y tipo) 
mientras almacenas individualmente solo las posiciones y  velocidades en cada instancia. Esto optimizará el uso de memoria cuando haya muchos vehículos  en el simulador. 

*/

// VehicleType - Flyweight object que contiene los datos compartidos
export class VehicleType {

    constructor(baseColor, engineType, brand) {
        this.baseColor = baseColor;
        this.engineType = engineType;
        this.brand = brand;
    }


    getInfo() {//mostrar la info compartida del vehiculo
        return `el color del vehiculo es: ${this.baseColor} el tipo de motor es: ${this.engineType} la marca es: (${this.brand})`;
    }
}

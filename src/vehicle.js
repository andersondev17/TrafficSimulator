// Clase Vehicle para instancias únicas
// // permite almacenar individualmente solo las posiciones y  velocidades en cada instancia.
export class Vehicle {
    constructor(type, posX, posY, speed) {
        this.type = type;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
    }

    moverVehiculo() {
        this.posX += this.speed;
        console.log(
            `Vehículo ${this.type.getInfo()} \n` +
            `Omg se movió a la posición (${this.posX}, ${this.posY}) \n` +
            `tremenda la velocidad del vehiculo fue de  ${this.speed} km/h\n`
        );
    }
}
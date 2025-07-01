import { Persona } from "./clase";

export class Empleado extends Persona {
    public puesto: string;

    constructor(nombre: string, edad: number, desarrollador: boolean, puesto: string) {
        super(nombre, edad, desarrollador);
        this.puesto = puesto;
    }

    public saludar(): string {
        return `${super.saludar()} y mi puesto es ${this.puesto}`;
    }

    obtenerInfo() {
        return `Tengo ${this.edad} años y trabajo como ${this.puesto}`;
    }
}
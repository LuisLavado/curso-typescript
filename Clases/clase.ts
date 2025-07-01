export class Persona {
    nombre: string;
    edad: number;
    desarrollador: boolean;

    constructor(nombre: string, edad: number, desarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.desarrollador = desarrollador;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}

// let persona = new Persona("Juan", 30, true);
// console.log(persona.saludar()); // Imprime: "Hola, mi nombre es Juan y tengo 30 años"
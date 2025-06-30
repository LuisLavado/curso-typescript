interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let persona: Persona = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true
};

console.log("Persona:", persona);

let personas: Persona[] = [
    { nombre: "Luis", edad: 27, esDesarrollador: true },
    { nombre: "Juan", edad: 30, esDesarrollador: true },
    { nombre: "María", edad: 25, esDesarrollador: false }
];

console.log("Personas:", personas);

//  métodos en interfaces
interface Sumar {
    (a: number, b: number): number;
}

let suma: Sumar = (a: number, b: number): number => {
    return a + b;
};

console.log("Suma:", suma(3, 5)); // Resultado: 8

interface Restar {
  restar(a: number, b: number): number;
}

let resta: Restar = {
  restar(a: number, b: number): number {
    return a - b;
  }
};

console.log("Resta:", resta.restar(5, 3)); // Resultado: 2
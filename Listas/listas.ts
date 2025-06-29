let nombres: string[] = ["Ana", "Juan", "María"];
console.log("Nombres:", nombres);

let edades: number[] = [39, 25, 30];
console.log("Edades:", edades);

let mixto: any[] = ["Hola", 42, true];
console.log(mixto);

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: "Luis", edad: 30, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "María", edad: 28, esDesarrollador: true }
];

// Podemos añadir elementos que cumplan con la interfaz
personas.push({ nombre: "Miranda", edad: 28, esDesarrollador: true });
console.log("Personas:", personas);

// Tuplas
let personaTupla: [string, number, boolean] = ["Luis", 30, true];
console.log("Persona Tupla:", personaTupla);

let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Miranda", 28, true]);
personasTupla.push(["Luis", 30, true]);
personasTupla.push(["Juan", 25, false]);
personasTupla.push(["María", 28, false]);

// Recorriendo tuplas
personasTupla.forEach(persona => {
    console.log("Persona:", persona);

    let nombre = persona[0];
    let edad = persona[1];
    let esDesarrollador = persona[2];

    console.log(`Nombre: ${nombre}, Edad: ${edad}, Desarrollador: ${esDesarrollador}`);    
});

// Enumeradores
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)
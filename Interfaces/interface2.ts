interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}

// Implementación sin la propiedad opcional
const direccion: Direccion = {
  calle: "Calle Falsa",
  numero: 123
};

// Implementación incluyendo la propiedad opcional
const direccionCompleta: Direccion = {
  calle: "Calle Falsa",
  numero: 123,
  ciudad: "Springfield"
};


// Read only
// Otra característica poderosa de las interfaces en TypeScript es la capacidad de definir propiedades de solo lectura
interface PersonaReadOnly {
  readonly nombre: string;
  readonly edad: number;
  readonly esDesarrollador: boolean;
}

const personaRead: PersonaReadOnly = {
  nombre: "Luis",
  edad: 30,
  esDesarrollador: true
};

console.log("personaRead", personaRead);

// personaRead.nombre = "IngeLuisito"; // Esto generará un error
// personaRead.edad = 31; // Esto generará un error

// Interfaz extendida
interface Empleado extends PersonaReadOnly {
  puesto: string;
}

let empleado: Empleado = {
    nombre: "IngeLuisito",
    edad: 30,
    esDesarrollador: true,
    puesto: "Desarrollador Senior"
}

console.log("empleado", empleado);
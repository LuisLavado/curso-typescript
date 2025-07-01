import { Empleado } from "./empleado";

const empleado = new Empleado('Juan', 30, true, 'Desarrollador Frontend');

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log(empleado.nombre);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado('Juan', 30, true, 'Desarrollador Frontend');
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log(empleado.nombre);

var persona = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true
};
console.log("Persona:", persona);
var personas = [
    { nombre: "Luis", edad: 27, esDesarrollador: true },
    { nombre: "Juan", edad: 30, esDesarrollador: true },
    { nombre: "María", edad: 25, esDesarrollador: false }
];
console.log("Personas:", personas);
var suma = function (a, b) {
    return a + b;
};
console.log("Suma:", suma(3, 5)); // Resultado: 8
var resta = {
    restar: function (a, b) {
        return a - b;
    }
};
console.log("Resta:", resta.restar(5, 3)); // Resultado: 2

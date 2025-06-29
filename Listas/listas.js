var nombres = ["Ana", "Juan", "María"];
console.log("Nombres:", nombres);
var edades = [39, 25, 30];
console.log("Edades:", edades);
var mixto = ["Hola", 42, true];
console.log(mixto);
var personas = [
    { nombre: "Luis", edad: 30, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "María", edad: 28, esDesarrollador: true }
];
// Podemos añadir elementos que cumplan con la interfaz
personas.push({ nombre: "Miranda", edad: 28, esDesarrollador: true });
console.log("Personas:", personas);
// Tuplas
var personaTupla = ["Luis", 30, true];
console.log("Persona Tupla:", personaTupla);
var personasTupla = [];
personasTupla.push(["Miranda", 28, true]);
personasTupla.push(["Luis", 30, true]);
personasTupla.push(["Juan", 25, false]);
personasTupla.push(["María", 28, false]);
// Recorriendo tuplas
personasTupla.forEach(function (persona) {
    console.log("Persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: ".concat(nombre, ", Edad: ").concat(edad, ", Desarrollador: ").concat(esDesarrollador));
});
// Enumeradores
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)

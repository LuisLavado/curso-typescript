function identity(arg) {
    return arg;
}
var output1 = identity("Hola Mundo");
console.log("output1", output1); // "Hola Mundo"
var output2 = identity(42);
console.log("output2", output2); // 42
var Caja = /** @class */ (function () {
    function Caja(valor) {
        this.contenido = valor;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeString = new Caja("libros");
console.log("Contenido de la caja de string:", cajaDeString.obtenerContenido());
var cajaDeNumero = new Caja(123);
console.log("Contenido de la caja de número:", cajaDeNumero.obtenerContenido());
var cajaDeArreglo = new Caja(["libro1", "libro2"]);
console.log("Contenido de la caja de arreglo:", cajaDeArreglo.obtenerContenido());
var ProcesadorNumerico = /** @class */ (function () {
    function ProcesadorNumerico() {
    }
    ProcesadorNumerico.prototype.procesar = function (valor) {
        return valor * 2;
    };
    ProcesadorNumerico.prototype.formatear = function (valor) {
        return "$".concat(valor.toFixed(2));
    };
    return ProcesadorNumerico;
}());
var procesador = new ProcesadorNumerico();
console.log("Procesado:", procesador.procesar(10)); // 20
console.log("Formateado:", procesador.formatear(10)); // $10.00
var ProcesadorString = /** @class */ (function () {
    function ProcesadorString() {
    }
    ProcesadorString.prototype.procesar = function (valor) {
        return valor.toUpperCase();
    };
    ProcesadorString.prototype.formatear = function (valor) {
        return "Texto: ".concat(valor);
    };
    return ProcesadorString;
}());
var procesadorString = new ProcesadorString();
console.log("Procesado:", procesadorString.procesar("hola")); // HOLA
console.log("Formateado:", procesadorString.formatear("hola")); // Texto: hola

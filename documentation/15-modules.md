**Clase 15 de 26 • Curso de TypeScript**
# Creación y uso de módulos en TypeScript para mejorar el código

### Resumen
La modularización en TypeScript es una práctica esencial para mantener tu código organizado, escalable y fácil de mantener. Dividir tu código en módulos más pequeños no solo mejora la legibilidad, sino que también facilita la detección y corrección de errores, permitiéndote crear aplicaciones más robustas y profesionales.

### ¿Por qué evitar los monolitos en tu código?
Un "monolito" en programación se refiere a grandes volúmenes de código concentrados en un solo archivo. Esta práctica es generalmente desaconsejada por varias razones:

* __Mayor probabilidad de errores:__ Cuantas más líneas de código tenga un archivo, más probable es que aparezcan errores.
* __Dificultad para localizar problemas:__ En archivos extensos, encontrar y corregir errores se vuelve una tarea mucho más compleja.
* __Mantenimiento complicado:__ Actualizar o modificar funcionalidades específicas requiere navegar por grandes bloques de código.
* __Colaboración limitada:__ Trabajar en equipo se dificulta cuando múltiples desarrolladores necesitan modificar el mismo archivo.

La solución a estos problemas es la **modularización** - dividir tu código en archivos más pequeños con responsabilidades específicas.

### ¿Cómo crear y utilizar módulos en TypeScript?
La implementación de módulos en TypeScript es sencilla y sigue un patrón similar al de las clases que ya conocemos. Veamos cómo crear nuestros primeros módulos:

### Creando un módulo de calculadora
Primero, creamos un archivo llamado calculator.ts que contendrá funciones matemáticas básicas:
```
export function suma(num1: number, num2: number) {
    return num1 + num2;
}

export function resta(num1: number, num2: number) {
    return num1 - num2;
}

export function multiplicacion(num1: number, num2: number) {
    return num1 * num2;
}

export function division(num1: number, num2: number) {
    return num1 / num2;
}

export const pi = 3.1416;
```
**La palabra clave** `export` es fundamental aquí, ya que indica que estos elementos pueden ser importados desde otros archivos. Puedes exportar:

* Funciones
* Constantes
* Variables
* Clases
* Interfaces
* Tipos

### Importando y utilizando el módulo
Una vez creado nuestro módulo, podemos utilizarlo desde otro archivo, por ejemplo, `main.ts`:
```
import { suma, resta, multiplicacion, division, pi } from './calculator';

console.log(suma(10, 154)); // Resultado: 164
console.log(resta(1, pi)); // Utilizando la constante importada
```
Al compilar `main.ts` con el comando `tsc main.ts`, TypeScript automáticamente compilará también c`alculator.ts` porque está siendo referenciado. Esto genera los archivos JavaScript correspondientes que podemos ejecutar con Node.js:
```
node main.js
```
El resultado mostrará los valores calculados por nuestras funciones importadas.

### Beneficios de la modularización
La modularización ofrece múltiples ventajas:

* __Código más organizado:__ Cada archivo tiene una responsabilidad específica.
* __Mejor mantenimiento:__ Puedes modificar un módulo sin afectar a otros.
* __Reutilización:__ Puedes importar las mismas funciones en diferentes partes de tu aplicación.
* __Trabajo en equipo:__ Diferentes desarrolladores pueden trabajar en diferentes módulos simultáneamente.
* __Pruebas más sencillas:__ Es más fácil escribir pruebas unitarias para módulos pequeños y específicos.

### ¿Cuándo y cómo refactorizar tu código en módulos?
**La refactorización** es el proceso de reestructurar código existente sin cambiar su comportamiento externo. Es una práctica recomendada para mejorar la calidad del código.

Para refactorizar tu código en módulos:

1. __Identifica grupos de funcionalidad relacionada__ en tu código actual.
2. __Extrae esas funcionalidades__ a archivos separados.
3. __Exporta__ las funciones, constantes o clases necesarias.
4. __Importa__ estos elementos en los archivos donde se necesiten.
5. __Prueba__ que todo sigue funcionando correctamente.

Es importante mencionar que **no necesitas empezar con módulos**. Puedes desarrollar primero un archivo grande que cumpla con tu objetivo y, una vez que funcione correctamente, refactorizarlo en módulos más pequeños.

La modularización es una habilidad fundamental para cualquier desarrollador de TypeScript que busque crear aplicaciones mantenibles y escalables. Implementar esta práctica desde el inicio de tus proyectos o refactorizar código existente te ayudará a construir soluciones más robustas y profesionales.
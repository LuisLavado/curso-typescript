**Clase 2 de 26 • Curso de TypeScript**
# Instalación y Configuración de TypeScript en Visual Studio Code

### Resumen

La programación con TypeScript se ha convertido en una herramienta fundamental para desarrolladores que buscan añadir robustez a sus proyectos JavaScript. Este superset de JavaScript ofrece tipado estático y otras características avanzadas que mejoran la calidad del código y facilitan el mantenimiento de aplicaciones complejas. Para comenzar a utilizar esta poderosa tecnología, es necesario seguir algunos pasos de configuración inicial que te permitirán aprovechar al máximo sus beneficios.

### ¿Cómo instalar TypeScript en tu sistema?
Antes de sumergirte en el mundo de TypeScript, es fundamental verificar que cuentas con los requisitos previos necesarios. TypeScript depende completamente de Node.js y NPM para su funcionamiento, por lo que estos deben estar instalados en tu sistema antes de proceder.

Para comprobar si ya tienes estas herramientas, puedes ejecutar los siguientes comandos en tu terminal:
```
node -v
npm -v
```

Estos comandos mostrarán las versiones instaladas de Node.js y NPM respectivamente. Si obtienes una respuesta con números de versión, significa que ya están instalados y puedes continuar. En caso contrario, deberás instalarlos antes de seguir adelante.

Una vez confirmado que tienes Node.js y NPM, puedes proceder a instalar TypeScript globalmente en tu sistema mediante el siguiente comando:
```
npm install -g typescript
```

Es posible que necesites permisos de administrador para realizar esta instalación global. En sistemas basados en Unix (como Linux o macOS), puedes utilizar:
```
sudo npm install -g typescript
```
Para verificar que la instalación se ha completado correctamente, ejecuta:
```
tsc -v
```
Este comando debería mostrar la versión de TypeScript instalada en tu sistema, confirmando que todo está listo para comenzar a trabajar.

### ¿Cómo mejorar la experiencia de desarrollo con extensiones?
Visual Studio Code es el editor recomendado para trabajar con TypeScript, ya que ofrece un excelente soporte para este lenguaje. Para optimizar aún más tu experiencia de desarrollo, es recomendable instalar la extensión "JavaScript and TypeScript Nightly" desarrollada por Microsoft.

Esta extensión proporciona:

* Resaltado de sintaxis mejorado
* Autocompletado inteligente
* Detección de errores en tiempo real
* Sugerencias de código más precisas

Para instalarla, simplemente:

1. Abre la sección de extensiones en VS Code (icono en la barra lateral)
2. Busca "TypeScript"
3. Localiza "JavaScript and TypeScript Nightly" de Microsoft
4. Haz clic en instalar

Es importante verificar que el autor sea Microsoft para garantizar que estás instalando la extensión oficial y segura.

¿Cómo inicializar un proyecto de TypeScript?
Una vez que tienes TypeScript instalado y tu editor configurado, es momento de inicializar tu primer proyecto. Para ello, navega hasta la carpeta donde deseas crear tu proyecto y ejecuta:
```
tsc --init
```
Este comando creará un archivo `tsconfig.json` en tu directorio actual. Este archivo es **fundamental para la configuración de TypeScript** en tu proyecto, ya que define cómo se comportará el compilador.

El archivo generado contiene numerosas opciones comentadas que puedes personalizar según tus necesidades. Las configuraciones básicas, como el target (versión de JavaScript a la que se compilará) y los módulos, aparecen sin comentar por defecto.
```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    // Muchas más opciones comentadas...
  }
}
```
Es recomendable explorar estas opciones para entender qué puedes personalizar en tu proyecto. Algunas configuraciones importantes incluyen:

* __target:__ Define la versión de JavaScript a la que se compilará tu código
* __module:__ Especifica el sistema de módulos a utilizar
* __strict:__ Activa un conjunto de comprobaciones de tipo estrictas
* __outDir:__ Directorio donde se generarán los archivos JavaScript compilados

Con estos pasos completados, __ya tienes todo lo necesario para comenzar a desarrollar con TypeScript__. La configuración inicial puede parecer un proceso adicional comparado con JavaScript puro, pero los beneficios que obtendrás en términos de detección temprana de errores y mantenibilidad del código hacen que valga completamente la pena.

¿Has utilizado TypeScript en alguno de tus proyectos? Comparte tu experiencia y cualquier duda que tengas sobre la configuración inicial en la sección de comentarios.
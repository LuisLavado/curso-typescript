// Seleccionando por nombre de etiqueta
const h1 = document.querySelector('h1');
console.log(h1?.textContent);

// Seleccionando por clase
let titulo: HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(titulo?.textContent);

// Seleccionando por ID
const message = document.querySelector('#message') as HTMLInputElement;
console.log(message.placeholder);
function saludar(nombre = "Invitado", edad = 18) {
  return `Hola ${nombre}, tienes ${edad} años`;
}

console.log(saludar()); // "Hola Invitado, tienes 18 años"
console.log(saludar("Ana")); // "Hola Ana, tienes 18 años"
console.log(saludar("Carlos", 25)); // "Hola Carlos, tienes 25 años"
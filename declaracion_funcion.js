// Declaración tradicional - se puede llamar antes de definirla
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana")); // ✅ Funciona

// Características:
// - Hoisting: se "eleva" al inicio del scope
// - Puede ser llamada antes de su definición
// - Tiene su propio scope
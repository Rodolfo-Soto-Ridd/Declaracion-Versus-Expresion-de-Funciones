// Función asignada a una variable
const despedir = function(nombre) {
  return `Adiós, ${nombre}!`;
};

console.log(despedir("Carlos")); // ✅ Funciona

// Función anónima
const multiplicar = function(a, b) {
  return a * b;
};

// Función nombrada (útil para debugging)
const dividir = function dividirNumeros(a, b) {
  if (b === 0) throw new Error("No se puede dividir por cero");
  return a / b;
};

// Características:
// - No hoisting: debe definirse antes de usarse
// - Puede ser anónima o nombrada
// - Se comporta como una variable
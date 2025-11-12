// Recopila argumentos restantes en un array
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3)); // 6
console.log(sumar(1, 2, 3, 4, 5)); // 15

// Combinado con parámetros normales
function multiplicar(multiplicador, ...numeros) {
  return numeros.map(num => num * multiplicador);
}

console.log(multiplicar(2, 1, 2, 3)); // [2, 4, 6]
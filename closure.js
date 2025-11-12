function crearContador() {
  let contador = 0; // Variable en scope externo

  return function() { // Closure
    contador++; // Puede acceder a 'contador'
    return contador;
  };
}

const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

const contador2 = crearContador(); // Nuevo closure, nuevo contador
console.log(contador2()); // 1
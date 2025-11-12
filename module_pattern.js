const contadorModulo = (function() {
  let contador = 0; // Privado

  return {
    incrementar: function() {
      contador++;
      return contador;
    },
    decrementar: function() {
      contador--;
      return contador;
    },
    obtener: function() {
      return contador;
    }
  };
})();

contadorModulo.incrementar(); // 1
contadorModulo.incrementar(); // 2
console.log(contadorModulo.obtener()); // 2
// contador no es accesible directamente desde fuera
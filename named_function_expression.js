const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Puede referenciarse a sí misma
};

console.log(factorial(5)); // 120
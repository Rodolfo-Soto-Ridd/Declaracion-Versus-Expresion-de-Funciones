// Expandir arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// Expandir objetos (ES2018+)
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const combinadoObj = { ...objeto1, ...objeto2 }; // { a: 1, b: 2, c: 3, d: 4 }

// En llamadas a funciones
function sumarTres(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
console.log(sumarTres(...numeros)); // 6
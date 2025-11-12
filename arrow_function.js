// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Arrow function equivalente
const sumar = (a, b) => {
  return a + b;
};

// Arrow function concisa (retorno implícito)
const sumar = (a, b) => a + b;

// Un solo parámetro (paréntesis opcionales)
const cuadrado = x => x * x;

// Sin parámetros
const saludar = () => "Hola Mundo!";
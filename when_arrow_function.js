// ✅ Ideal para callbacks
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(num => num * 2);

// ✅ Para funciones pequeñas
const esPar = num => num % 2 === 0;

// ✅ Cuando necesitas el this del scope padre
class Componente {
  constructor() {
    this.datos = [];
  }

  cargarDatos() {
    fetch('/api/datos')
      .then(response => response.json())
      .then(datos => {
        this.datos = datos; // this se refiere al objeto Componente
      });
  }
}

// ❌ Evitar en métodos de objeto (pierdes this)
const objeto = {
  nombre: "Test",
  metodo: () => console.log(this.nombre) // this no se refiere al objeto
};
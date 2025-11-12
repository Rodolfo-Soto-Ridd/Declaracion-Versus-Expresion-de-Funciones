const objeto = {
  nombre: "Mi Objeto",
  funcionNormal: function() {
    console.log(this.nombre); // "Mi Objeto"
  },
  funcionFlecha: () => {
    console.log(this.nombre); // undefined (o valor del scope externo)
  }
};

objeto.funcionNormal(); // "Mi Objeto"
objeto.funcionFlecha(); // undefined
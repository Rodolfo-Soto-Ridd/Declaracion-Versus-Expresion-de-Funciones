function Temporizador() {
  this.segundos = 0;

  setInterval(() => {
    this.segundos++;
    console.log(this.segundos);
  }, 1000);
}

const timer = new Temporizador(); // this.segundos se incrementa correctamente
const global = "Variable global";

function exterior() {
  const exteriorVar = "Variable exterior";

  function interior() {
    const interiorVar = "Variable interior";

    function masInterna() {
      // Puede acceder a todas las variables en la cadena de scope
      console.log(interiorVar);    // "Variable interior"
      console.log(exteriorVar);    // "Variable exterior"
      console.log(global);         // "Variable global"
    }

    return masInterna;
  }

  return interior;
}

const funcionClosure = exterior()();
funcionClosure();
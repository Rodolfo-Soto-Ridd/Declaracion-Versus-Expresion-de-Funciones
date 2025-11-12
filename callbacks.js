function crearLogger(prefijo) {
  return function(mensaje) {
    console.log(`[${prefijo}] ${mensaje}`);
  };
}

const logError = crearLogger("ERROR");
const logInfo = crearLogger("INFO");

logError("Algo salió mal"); // [ERROR] Algo salió mal
logInfo("Operación exitosa"); // [INFO] Operación exitosa
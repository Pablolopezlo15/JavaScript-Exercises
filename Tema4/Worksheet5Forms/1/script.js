function validarMayuscula(parametro) {
    return /[A-Z]/.test(parametro);
}
  
function validarCaracteresEspeciales(parametro) {
    return /[!@#$%^&]/.test(parametro);
}
  
function validarCorreo(parametro) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(parametro);
}
  
function validarTarjetaCredito(parametro) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(parametro);
}
  
function validarLongitud(parametro) {
    return parametro.length >= 8;
}
  
function validarNumero(parametro) {
    return /\d/.test(parametro);
}
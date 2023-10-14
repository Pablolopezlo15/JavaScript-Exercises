// Función para calcular potencias de manera no recursiva
function potencias(base, exponente) {
    return Math.pow(base, exponente);
}

console.log(potencias(8, 4));

function potenciasRecursivas(base, exponente) {
    if (exponente === 0) {
        return 1;
    } 
    else {
        return base * potenciasRecursivas(base, exponente - 1);
    }
}

console.log(potenciasRecursivas(8, 4));

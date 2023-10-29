const usernameInput = document.getElementById("username");

function validarMayuscula(valor) {
    const errormayus = document.getElementById("errormayus");
    if (/[A-Z]/.test(valor)) {
        errormayus.style.color = "green";
    } 
    else {
        errormayus.style.color = "red";
    }
}

function validarMinúscula(valor) {
    const errorminus = document.getElementById("errorminus");
    if (/[a-z]/.test(valor)) {
        errorminus.style.color = "green";
    } 
    else {
        errorminus.style.color = "red";
    }
}

function validarLongitud(valor) {
    const errorlong = document.getElementById("errorlong");
    if (valor.length >= 6) {
        errorlong.style.color = "green";
    } 
    else {
        errorlong.style.color = "red";
    }
}

function validar() {
    const valor = usernameInput.value;
    validarMayuscula(valor);
    validarMinúscula(valor);
    validarLongitud(valor);
}

usernameInput.addEventListener("keyup", validar);

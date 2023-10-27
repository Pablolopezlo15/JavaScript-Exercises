
function obtenerValor() {
    const valor = username.value;
    console.log("Texto actual en el input:", valor);
}
const username = document.getElementById("username");
const valor = username.value;

username.addEventListener("input", obtenerValor);

function validarMayuscula(valor) {
    const errormayus = document.getElementById("errormayus");
    if (/[A-Z]/.test(valor)){
        errormayus.style.color = "green";
    }
    else {
        errorminus.style.color = "red";
    }
}

function validarMinúscula(valor) {
    const errorminus = document.getElementById("errorminus");
    if (/[a-z]/.test(valor)){
        errorminus.style.color = "green";
    }
    else {
        errorminus.style.color = "red";
    }
}

function validarLongitud(valor) {
    const errorlong = document.getElementById("errorlong");
    if (valor.lenght >= 6) {
        errorlong.style.color = "green";

    }
}

const inputusername = document.getElementById("username");
inputusername.addEventListener("keydown", validarLongitud);
inputusername.addEventListener("keydown", validarMayuscula);
inputusername.addEventListener("keydown", validarMinúscula);




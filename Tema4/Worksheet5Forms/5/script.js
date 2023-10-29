const numerotarjeta = document.getElementById("numerotarjeta");
const inputnumero = document.getElementById("inputnumero");
function escribirNumero(valor) {
    numerotarjeta.innerHTML = valor;
}

const mes = document.getElementById("mes");
const inputmes = document.getElementById("inputmes");
function escribirMes(valor) {
    mes.innerHTML = valor;
}

const year = document.getElementById("year");
const inputyear = document.getElementById("inputyear");
function escribirYear(valor) {
    year.innerHTML = valor;
}

const nameholders = document.getElementById("nameholders");
const inputcardholders = document.getElementById("inputcardholders");
function escribirHolders(valor) {
    nameholders.innerHTML = valor;
}

const cvv = document.getElementById("cvv");
const inputcvv = document.getElementById("inputcvv");
function escribirCvv(valor) {
    cvv.innerHTML = valor;
}


function escribirValores() {
    const valornum = inputnumero.value;
    const valormes = inputmes.value;
    const valoryear = inputyear.value;
    const valorholders = inputcardholders.value;
    const valorcvv = inputcvv.value;
    escribirNumero(valornum);
    escribirMes(valormes);
    escribirYear(valoryear);
    escribirHolders(valorholders);
    escribirCvv(valorcvv);
}

const parteatras = document.getElementById("flip-card-inner");
function vueltaCvv(){
    parteatras.style.transform = "rotateY(180deg)";
}
function parteDelante(){
    parteatras.style.transform = "rotateY(0deg)";
}

inputnumero.addEventListener("input", escribirValores);
inputnumero.addEventListener("input", parteDelante);

inputmes.addEventListener("input", escribirValores);
inputmes.addEventListener("input", parteDelante);

inputyear.addEventListener("input", escribirValores);
inputyear.addEventListener("input", parteDelante);

inputcardholders.addEventListener("input", escribirValores);
inputcardholders.addEventListener("input", parteDelante);

inputcvv.addEventListener("input", escribirValores);
inputcvv.addEventListener("input", vueltaCvv);

function validarTarjetaNum() {
    const regEx = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;

}

function validarCvv(valorcvv) {

    const cvvRegEx = /^[0-9]{3}$/;
    const errorcvv = document.getElementById("errorcvv");
    if (cvvRegEx.test(valorcvv)) {
        console.log('número de seguridad válido');
        return true;
    }
    else {
        console.log('número de seguridad inválido');
        errorcvv.innerHTML = "CVV no válido";
        return false;
    }
}

validarCvv();

inputcvv.addEventListener("input", validarCvv);

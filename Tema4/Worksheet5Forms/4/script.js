window.onload = () => {

    var form = document.getElementById("form");
    form.addEventListener('submit', function (event) {
        if (!validarNombre() || !validarTelefono() || !validarEmail() || !validarPassword() || !checkPoliticas()) {
            event.preventDefault();
        }
        else {
            console.log("Formulario enviado con éxito.");
        }
    });


    var check2Input = document.querySelector('input[name="check2"]');

    form.addEventListener('keyup', validarForm);
    check2Input.addEventListener('change', checkPoliticas);

}

function validarForm() {
    validarNombre();
    validarTelefono();
    validarEmail();
    validarPassword();
    checkPoliticas();
}

function validarNombre() {
    var name = document.getElementById("name").value;
    var namelabelerr = document.getElementById("namelabelerr");
    var apellidos = document.getElementById("apellidos").value;
    var apellidoslabelerr = document.getElementById("apellidoslabelerr");
    var nombreRegex= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (name.trim() === "") {
        console.log("Por favor, introduce nombre.");
        namelabelerr.innerHTML = "Por favor, introduce nombre.";
        namelabelerr.style.color = "red";
        return false;
    }
    else {
        namelabelerr.innerHTML = "";
    }
    if(!nombreRegex.test(name)) {
        namelabelerr.innerHTML = "Contiene caracteres no válidos";
        namelabelerr.style.color = "red";
        console.log("Introduce nombre válido");
    }
    else {
        namelabelerr.innerHTML = "";
    }
    if (apellidos.trim() === "") {
        console.log("Por favor, introduce apellidos.");
        apellidoslabelerr.innerHTML = "Por favor, introduce apellidos.";
        apellidoslabelerr.style.color = "red";
        return false;
    }
    else {
        apellidoslabelerr.innerHTML = "";
    }
    if(!nombreRegex.test(apellidos)) {
        apellidoslabelerr.innerHTML = "Contiene caracteres no válidos";
        apellidoslabelerr.style.color = "red";
        console.log("Introduce apellidos válidos");
    }
    else {
        apellidoslabelerr.innerHTML = "";
    }
}


function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    var telflabelerr = document.getElementById("telflabelerr");
    var telfRegex = /^\d{9}$/; 

    if (telefono.trim() === "") {
        console.log("Por favor, introduce telefono.");
        telflabelerr.innerHTML = "Por favor, introduce número de teléfono.";
        telflabelerr.style.color = "red";
        return false;
    }
    else {
        telflabelerr.innerHTML = "";
    }
    if (!telfRegex.test(telefono)) {
        console.log("Por favor, introduce un teléfono válido de 9 dígitos.");
        telflabelerr.innerHTML = "Por favor, introduce un teléfono válido de 9 dígitos.";
        telflabelerr.style.color = "red";
        return false;
    }
    else {
        telflabelerr.innerHTML = "";
    }
}

function validarEmail() {
    var email = document.getElementById("email").value;
    var emaillabelerr = document.getElementById("emaillabelerr");
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.trim() === "") {
        console.log("Por favor, introduce email.");
        emaillabelerr.innerHTML = "Por favor, introduce email.";
        emaillabelerr.style.color = "red";
        return false;
    }
    else {
        emaillabelerr.innerHTML = "";
    }
    if (!emailRegex.test(email)) {
        console.log("Por favor, introduce un correo electrónico válido.");
        emaillabelerr.innerHTML = "Por favor, introduce un correo válido.";
        emaillabelerr.style.color = "red";
        return false;
    }
    else {
        emaillabelerr.innerHTML = "";
    }
}

function validarPassword() {
    var password = document.getElementById("password").value;
    var passlabelerr = document.getElementById("passlabelerr");
    var repassword = document.getElementById("repassword").value;
    var repasswordlabelerr = document.getElementById("repasswordlabelerr");
    var passRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{6,16}$/;

    if (password.trim() === "") {
        console.log("Por favor, introduce una contraseña.");
        passlabelerr.innerHTML = "Por favor, introduce una contraseña.";
        passlabelerr.style.color = "red";
        return false;
    }
    else {
        passlabelerr.innerHTML = "";
    }
    if(!passRegex.test(password)) {
        console.log("Por favor, introduce una contraseña válida.");
        passlabelerr.innerHTML = "Debe contener entre 6 y 16 dígitos y uno de estos '!@#$%^&*'.";
        passlabelerr.style.color = "red";
        return false;
    }
    else {
        passlabelerr.innerHTML = "";
    }
    if (password !== repassword) {
        console.log("Las contraseñas no coinciden.");
        repasswordlabelerr.innerHTML = "Las contraseñas no coinciden.";
        repasswordlabelerr.style.color = "red";
        return false;
    }
    else {
        repasswordlabelerr.innerHTML = "";
    }
}

function checkPoliticas() {

    var check2 = document.querySelector('input[name="check2"]').checked;
    var check2err = document.getElementById("check2err");

    if (!check2) {
        console.log("Debes aceptar las políticas.");
        check2err.innerHTML = "Debes aceptar las políticas.";
        check2err.style.color = "red";
        return false;
    }
    else {
        check2err.innerHTML = "";
    }
}
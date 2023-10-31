document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        this.submit();
    }
});


function validateForm() {
    var name = document.getElementById("name").value;
    var namelabelerr = document.getElementById("namelabelerr");
    var apellidos = document.getElementById("apellidos").value;
    var apellidoslabelerr = document.getElementById("apellidoslabelerr");
    var telefono = document.getElementById("telefono").value;
    var telflabelerr = document.getElementById("telflabelerr");

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var check2 = document.querySelector('input[name="check2"]').checked;
    var telfRegex = /^\d{9}$/; 
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var nombreRegex= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    

    if (name.trim() === "") {
        console.log("Por favor, introduce nombre.");
        namelabelerr.innerHTML = "Por favor, introduce nombre.";
        namelabelerr.style.color = "red";
        return false;
    }
    else if(!nombreRegex.test(name)) {
        namelabelerr.innerHTML = "Contiene caracteres no válidos";
        namelabelerr.style.color = "red";
        console.log("Introduce nombre válido");
    }
    if (apellidos.trim() === "") {
        console.log("Por favor, introduce apellidos.");
        apellidoslabelerr.innerHTML = "Por favor, introduce apellidos.";
        apellidoslabelerr.style.color = "red";
        return false;
    }
    else if(!nombreRegex.test(apellidos)) {
        apellidoslabelerr.innerHTML = "Contiene caracteres no válidos";
        apellidoslabelerr.style.color = "red";
        console.log("Introduce apellidos válidos");
    }
    if (telefono.trim() === "") {
        console.log("Por favor, introduce telefono.");
        telflabelerr.innerHTML = "Por favor, introduce número de teléfono.";
        telflabelerr.style.color = "red";
        return false;
    }
    else if (!telfRegex.test(telefono)) {
        console.log("Por favor, introduce un teléfono válido de 9 dígitos.");
        telflabelerr.innerHTML = "Por favor, introduce un teléfono válido de 9 dígitos.";
        telflabelerr.style.color = "red";
        return false;
    }
    if (!emailRegex.test(email)) {
        console.log("Por favor, introduce un correo electrónico válido.");
        emaillabelerr.innerHTML = "Por favor, introduce un teléfono válido de 9 dígitos.";
        emaillabelerr.style.color = "red";
        return false;
    }
    if (password.trim() === "") {
        console.log("Por favor, introduce una contraseña.");
        return false;
    }
    else if(!passRegex.test(password))
    if (password !== repassword) {
        console.log("Las contraseñas no coinciden.");
        return false;
    }

    if (!check2) {
        console.log("Debes aceptar las políticas.");
        return false;
    }
    return true;
}
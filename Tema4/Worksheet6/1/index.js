window.onload = () => {
    nombre = document.getElementById("nombre").addEventListener("click", setName);
    borrarcookie = document.getElementById("borrarcookie").addEventListener("click", deleteCookie);

}

function setName() {
    var name = prompt("Por favor, ingresa tu nombre:");
    if (name) {
        var d = new Date();
        d.setTime(d.getTime() + (5 * 60 * 1000));
        document.cookie = "user_name=" + encodeURIComponent(name) + "; expires=" + d.toUTCString() + "; path=/";
        displayGreeting(name);
    }
}

function mostrarNombre(name) {
    var mostrarnombre = document.getElementById("mostrarnombre");
    mostrarnombre.innerHTML = "Hola, " + name + ". Bienvenido a nuestra página.";
}

function deleteCookie() {
    document.cookie = "user_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    var mostrarnombre = document.getElementById("mostrarnombre");
    mostrarnombre.innerHTML = "";
}

// Comprobar si existe una cookie al cargar la página
function checkCookie() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("user_name=") === 0) {
            var name = decodeURIComponent(cookie.substring(10));
            mostrarNombre(name);
            break;
        }
    }
}

checkCookie();
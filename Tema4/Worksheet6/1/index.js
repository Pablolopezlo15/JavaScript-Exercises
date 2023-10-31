window.onload = () => {

}
function setCookie() {
    var userName = document.getElementById("nameInput").value;
    document.cookie = "userName=" + userName + "; expires=" + getCookieExpiration(5);
    showGreeting(userName);
}

// Función para obtener la fecha de expiración de la cookie en minutos
function getCookieExpiration(minutes) {
    var now = new Date();
    now.setTime(now.getTime() + (minutes * 60 * 1000));
    return now.toUTCString();
}

// Función para mostrar el saludo al usuario
function showGreeting(userName) {
    document.getElementById("content").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("userName").textContent = userName;
}

// Función para borrar la cookie y cerrar la sesión
function deleteCookie() {
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.getElementById("content").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById("nameInput").value = "";
}

// Comprobar si la cookie ya existe
function checkCookie() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("userName=") === 0) {
            var userName = cookie.substring(9);
            showGreeting(userName);
            return;
        }
    }
}

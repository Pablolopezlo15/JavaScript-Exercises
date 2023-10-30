window.onload = ()=> {
    let fecha = Date.now();
    CrearCookie("colorFondo","red", fecha.toUTCString);
    LeerCookie("colorFondo");

}

function LeerCookie(identificador) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieParts = cookie.split('=');
        if (cookieParts[0] == identificador) {
            console.log(cookieParts[1]);
            return cookieParts[1]; 
        }
    }

}

function CrearCookie(identificador,valor,fechaExpiracion){
    document.cookie = identificador+"="+valor+"; expires="+fechaExpiracion;
}

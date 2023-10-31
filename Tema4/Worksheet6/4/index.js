window.onload = ()=> {
    let fecha = Date(0);
    nombrecookie = document.getElementById("nombre").value;
    CrearCookie(nombrecookie,"red", fecha);
    LeerCookie("colorFondo");
    btncrear = document.getElementById("crear");
    btncrear.addEventListener("click", CrearCookie)
    btnborrar = document.getElementById("borrar");
    btnborrar.addEventListener("click", BorrarCookie);
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

input = document.getElementById("inputcookie").value;

function BorrarCookie(input) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieParts = cookie.split('=');
        if (cookieParts[0] == input) {
            document.cookie = cookieParts[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        }
    }
}


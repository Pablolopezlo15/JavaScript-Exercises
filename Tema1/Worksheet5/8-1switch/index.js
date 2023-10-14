var mes = prompt("Escribe un mes");

switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert(mes + " tiene 31 días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert(mes + " tiene 30 días");
        break;
    case "Febrero":
        alert(mes + " tiene 28 días");
        break;
    default:
        alert("Mes no válido");
}

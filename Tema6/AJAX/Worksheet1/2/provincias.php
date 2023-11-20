<?php

$key = "531e99e59e30d64abe069a829393e2f6a644e543611d30a5f6390f83427c4c36";


// Verificar si se proporciona el código de comunidad (CCOM)
if (isset($_GET["CCOM"])) {
    $CCOM = $_GET["CCOM"];
    $jsonProvincias = file_get_contents('https://apiv1.geoapi.es/provincias?CCOM=' . $CCOM . '&type=JSON&key=' . $key);
    $datosProvincias = json_decode($jsonProvincias, true);

    // Enviar datos de provincias como respuesta JSON
    echo json_encode($datosProvincias);
}

header('Content-Type: application/json');
?>
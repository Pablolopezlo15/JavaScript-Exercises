<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$api_key = "tu_api_key";
$CMUM = $_GET["CMUM"];
$url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/{$CMUM}/?api_key={$api_key}";

$response = @file_get_contents($url);

if ($response === FALSE) {
    http_response_code(500);
    echo json_encode(array("error" => "Error al realizar la solicitud a AEMET."));
    exit;
}

$data = json_decode($response, true);

if (isset($data["error"])) {
    http_response_code(500);
    echo json_encode(array("error" => "Error en la respuesta de AEMET: " . $data["error"]["descripcion"]));
    exit;
}

echo json_encode(array("datos" => $data));
?>

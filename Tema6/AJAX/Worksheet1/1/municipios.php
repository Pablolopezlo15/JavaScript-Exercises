<?php

$key = "531e99e59e30d64abe069a829393e2f6a644e543611d30a5f6390f83427c4c36";


if (isset($_GET["CPRO"])) {
    $CPRO = $_GET["CPRO"];
    $jsonMunicipios = file_get_contents('https://apiv1.geoapi.es/municipios?CPRO='. $CPRO .'&type=JSON&key=' . $key);
    $datosMunicipios = json_decode($jsonMunicipios, true);

    echo json_encode($datosMunicipios);
}

?>
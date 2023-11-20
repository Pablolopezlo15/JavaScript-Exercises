<?php
    if(isset($_GET["codigoPostal"])){
        $codigoPostal = $_GET["codigoPostal"];
        $key = "531e99e59e30d64abe069a829393e2f6a644e543611d30a5f6390f83427c4c36";
        $JSON = 'https://apiv1.geoapi.es/comunidades?CCOM=01&CPRO='.$CPRO.'&type=JSON&key='.$key; 
        $weatherData = simplexml_load_file($xml);
        echo $weatherData;
    }

    // Carga el archivo JSON
    $key = "531e99e59e30d64abe069a829393e2f6a644e543611d30a5f6390f83427c4c36";
    $CPRO = "01";
    $json = file_get_contents('https://apiv1.geoapi.es/comunidades?CCOM=01&CPRO='.$CPRO.'&type=JSON&key='.$key);
    $datos = json_decode($json, true);

    // Inicia el select
    echo '<select name="opciones">';

    // Itera sobre los elementos que quieres mostrar en el select
    foreach ($datos['CPRO'] as $elemento) {
        // Crea una opción para cada elemento
        echo '<option value="' . $elemento['valor'] . '">' . $elemento['valor'] . '</option>';
    }

    // Cierra el select
    echo '</select>';

?>
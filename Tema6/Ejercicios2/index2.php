<?php
$username = $_POST['username'];
$disponible = rand(0, 1); // Generar aleatoriamente 0 o 1

if ($disponible) {
  // El nombre está disponible
  $xmlResponse = '<respuesta><disponible>true</disponible></respuesta>';
} else {
  // El nombre no está disponible
  $xmlResponse = '<respuesta><disponible>false</disponible></respuesta>';
}

header('Content-Type: application/xml');
echo $xmlResponse;
?>

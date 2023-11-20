<?php
$username = $_POST['username'];
$nodisponible = "Pablo";

if ($username != $nodisponible) {
  echo'<respuesta><disponible>Disponible</disponible></respuesta>';
} else {
  echo '<respuesta><disponible>No disponible</disponible></respuesta>';
}

?>

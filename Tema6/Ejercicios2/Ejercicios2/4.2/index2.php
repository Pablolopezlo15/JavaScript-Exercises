<?php
$username = $_POST['username'];
$disponible = rand(0, 1); 

if ($disponible) {
  echo '<respuesta><disponible>true</disponible></respuesta>';
} else {
  $alternativas = array('usuario123', 'nombre_456', 'otro_nombre');
  echo '<respuesta><disponible>false</disponible><alternativas>' . implode(',', $alternativas) . '</alternativas></respuesta>';
}

?>

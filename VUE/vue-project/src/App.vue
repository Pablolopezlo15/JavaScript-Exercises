<script setup>
  import cabecera from './components/cabecera.vue'
  import cuerpo from './components/cuerpo.vue'
  import { onMounted, ref } from "vue";

  let notas = ref([]);

  function reciboNuevaNota(nota) {

    let fecha = new Date();
    let fechaDiamesaño = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear() + ' ' + fecha.getHours() + ':' + fecha.getMinutes();
    notas.value.push(
      {
        id: notas.value.length + 1,
        texto: nota,
        prioridad: 0,
        fecha: fechaDiamesaño,
        completada: false,
      }
    );
    guardarEnLocalStorage();
    console.log(notas);
  }

  

  function ordenarPorNombre(notas){
  }
  function notaCompletada(id){
    notas.value[id-1].completada = true;
    console.log(id);
    guardarEnLocalStorage();
  }

  function eliminarCompletadas() {
    notas.value = notas.value.filter(item => !item.completada);
    guardarEnLocalStorage();
}

  function borrarNota(id) {
      const index = notas.value.findIndex(nota => nota.id === id);
      if (index !== -1) {
          notas.value.splice(index, 1);
      }
      guardarEnLocalStorage();
  }

  function guardarEnLocalStorage() {
      localStorage.setItem('notas', JSON.stringify(notas.value));
  }

  function leerDeLocalStorage() {
    const storedNotas = localStorage.getItem('notas');
    if (storedNotas) {
      notas.value = JSON.parse(storedNotas);
    }
  }

  onMounted(() => {
    leerDeLocalStorage();
  });

</script>

<template>
  <header>

    <div class="wrapper">
      <h1>Inicio</h1>
      <cabecera @nuevaNota="reciboNuevaNota" @borrarCompletadas="eliminarCompletadas"></cabecera>
      <cuerpo :arraynotas="notas" @idNota="notaCompletada" @notaid="borrarNota"></cuerpo>

    </div>
  </header>

</template>

<style scoped>

</style>

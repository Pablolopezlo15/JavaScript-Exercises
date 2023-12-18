<script setup>
  import cabecera from './components/cabecera.vue'
  import cuerpo from './components/cuerpo.vue'
  import { ref } from "vue";

  let notas = ref([]);
  function reciboNuevaNota(nota) {
    notas.value.push(
      {
        id: notas.value.length + 1,
        texto: nota,
        fecha: new Date(),
        prioridad: 0,
        completada: false
      }
    );
    console.log(notas);
  }

  function ordenarPorNombre(notas){
    
  }
  function notaCompletada(id){
    notas.value[id-1].completada = true;
    console.log(id);
  }


</script>

<template>
  <header>

    <div class="wrapper">
      <h1>Inicio</h1>
      <cabecera @nuevaNota="reciboNuevaNota"></cabecera>
      <cuerpo :arraynotas="notas" @idNota="notaCompletada"></cuerpo>

    </div>
  </header>

</template>

<style scoped>

</style>

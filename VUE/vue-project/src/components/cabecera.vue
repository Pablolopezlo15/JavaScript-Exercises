<script setup>
import { ref } from "vue";
const lanzarEvento = defineEmits(["nuevaNota", "borrarCompletadas"] );
let nota = ref("");

function nuevaNota() {
    lanzarEvento("nuevaNota", nota.value);
    
    // console.log(nota);
}
function eliminarCompletadas() {
    lanzarEvento("borrarCompletadas");
    console.log("borrarCompletadas");
}


</script>

<template>
    <h1>Cabecera con valor {{ nota }}</h1>
    <input type="text" v-model="nota">
    <button @click="nuevaNota">Alta nota</button>
    <button @click="eliminarCompletadas">Borrar todas las completadas</button>
</template>
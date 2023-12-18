<script setup>
import { ref } from "vue";
const lanzarEvento = defineEmits(["nuevaNota"]);
let nota = ref("");

function nuevaNota() {
    lanzarEvento("nuevaNota", nota.value);
    
    // console.log(nota);
}


</script>

<template>
    <h1>Cabecera con valor {{ nota }}</h1>
    <input type="text" v-model="nota">
    <button @click="nuevaNota">Alta nota</button>
</template>
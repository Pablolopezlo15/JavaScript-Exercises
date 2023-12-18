<script setup>
defineProps(['atributoPrueba', 'arraynotas'])
const lanzarEvento = defineEmits(['idNota']);



function marcarcompletada(id) {
    lanzarEvento('idNota', id);
    console.log(id);
    // notas.completada = true;
}
</script>

<template>
    Recibo el atributo {{ arraynotas }}
    <ul v-for="nota in arraynotas" :key="nota.id">
        <li>{{ nota.texto }} {{ nota.completada }}<button @click="marcarcompletada(nota.id)">Completada</button></li>
    </ul>
</template>
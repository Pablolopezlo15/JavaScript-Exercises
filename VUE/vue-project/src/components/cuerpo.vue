<script setup>
defineProps(['atributoPrueba', 'arraynotas'])
const lanzarEvento = defineEmits(['idNota', 'notaid']);

function marcarCompletada(id) {
    lanzarEvento('idNota', id);
    console.log(id);
    // notas.completada = true;
}

function borrarNota(id) {
    lanzarEvento('notaid', id);
    console.log(id);
    // notas.completada = true;
}
</script>

<template>
    <!-- Recibo el atributo {{ arraynotas }} -->
    <ul v-for="nota in arraynotas" :key="nota.id">
        <li>{{ nota.texto }} {{ nota.prioridad }} {{ nota.fecha }}<button @click="marcarCompletada(nota)">Completada</button><button @click="borrarNota(nota.id)">Eliminar</button></li>
    </ul>
</template>


<style scoped>
.tachado {
    text-decoration: line-through;
}
</style>
<script setup>
    import { useRouter, useRoute } from 'vue-router';

    const router = useRouter();
    const route = useRoute();

    console.log("Recibo idUsuario: " + route.params.idUsuario);

    function cerrarSesion() {
        router.push({ name: 'inicio' });
    }

</script>

<template>
    Componente Area Privada
    <button @click="cerrarSesion">Cerrar sesión</button>
</template>
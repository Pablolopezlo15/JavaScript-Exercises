<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
//   import cabecera from './cabecera.vue'
  import cuerpo from './cuerpo.vue'

  const route = useRoute();
const username = ref('');

onMounted(() => {
  username.value = route.params.username;
  console.log(route.params.username);
});
</script>

<template>
    <!-- <cabecera></cabecera> -->
    <cuerpo></cuerpo>
</template>
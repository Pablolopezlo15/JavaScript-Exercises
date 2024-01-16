<script setup>
import { getAuth, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

import cabecera from './cabecera.vue';

const auth = getAuth();
const provider = new GoogleAuthProvider();
const router = useRouter();

let user = ref(auth.currentUser);


</script>

<template>
    <cabecera></cabecera>
      <!-- <header class="header">
        <h1>To - Do List</h1>

        <ul v-if="user">
            <p>Bienvenido, {{ user.displayName }}.</p>
            <img class="foto" :src="user.photoURL" alt="">
            <button @click="cerrarSesion">Cerrar Sesión</button>
        </ul>
        <ul v-else>
          <button @click="iniciarSesion">Iniciar Sesion con <i class="ri-google-fill"></i></button>     
        </ul>
    </header> -->


    <!-- <h1>Inicia Sesion</h1>
    <button @click="iniciarSesion">Iniciar Sesion con <i class="ri-google-fill"></i></button>
    <button @click="cerrarSesion">Cerrar Sesion</button>
    <label for="email">Email: </label>
    <input type="text" id="email" name="email" v-model="email">
    <label for="password">Password: </label>
    <input type="password" id="password" name="password" v-model="password">
    <button @click="iniciarSesionCorreo">Iniciar Sesion</button> -->

    <h1>LANDING PAGE</h1>
</template>
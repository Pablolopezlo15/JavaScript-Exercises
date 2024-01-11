<script setup>
import { getAuth, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

import { ref } from 'vue'
const nombreUsuario = ref('')

import cabecera from './cabecera.vue';

const auth = getAuth();
const provider = new GoogleAuthProvider();
const router = useRouter();

function iniciarSesion() {
    console.log("iniciarSesion");
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    let nombreUsuario = user.displayName;
    console.log(nombreUsuario);

    // router.push({ name: "privada", params: { nombreUsuario } });
    return router.push({ name: 'privada', params: { username: nombreUsuario } });

    // router.push({ name: 'privada', params: { username: nombreUsuario } });
  

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

function cerrarSesion() {

    signOut(auth).then(() => {
    // Sign-out successful.
    console.log("sesion cerrada");
    }).catch((error) => {
    // An error happened.
    });
}

</script>

<template>
    <h1>Inicia Sesion</h1>
    <button @click="iniciarSesion">Iniciar Sesion</button>
    <button @click="cerrarSesion">Cerrar Sesion</button>
</template>
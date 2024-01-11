<script setup>
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";

import Inicio from "./inicio.vue";
const lanzarEvento = defineEmits(["nuevaNota", "borrarCompletadas", "nuevoArchivo"] );

let contenidoNota = "";
let file = "";

function altaNota() {
    console.log("altaNota");
    lanzarEvento("nuevaNota", contenidoNota, file);
    contenidoNota = "";
    file = "";
}

function borrarNotasCompletadas() {
    console.log("borrarNotasCompletadas");
    lanzarEvento("borrarCompletadas");
}

function subirAdjunto(event) {
    file = event.target.files[0];
    lanzarEvento("nuevoArchivo", file);
    console.log(file);
    file = "";
}

const router = useRouter();

function cerrarSesion() {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    console.log("sesion cerrada");
    router.push("/");
    }).catch((error) => {
    // An error happened.
    });
}

</script>

<template>
    <header class="header">
        <h1>To - Do List</h1>
        <ul>
            <p>Bienvenido </p>
            <button @click="cerrarSesion">Cerrar Sesión</button>
        </ul>
    </header>

    <nav>
        <input type="text" v-model="contenidoNota" @keyup.enter="altaNota()" placeholder="Escribe tu nota"><button @click="altaNota">Alta Nota</button>
        <input type="file" id="subirFichero" name="adjunto" accept="image/png, image/jpg" @change="subirAdjunto($event)"> 
        <button @click="borrarNotasCompletadas">Borrar Completadas</button>
    </nav>
</template>
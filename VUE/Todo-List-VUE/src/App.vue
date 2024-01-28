<script setup>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useCollection } from 'vuefire'
import { collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore"; 
import { useFirestore } from 'vuefire';

import cabecera from './cabecera.vue'

let db = useFirestore();
const todos = useCollection(collection(db, 'todos'));

let file = "";

function subirAdjunto(file) {
  console.log("subirAdjunto");
  console.log(file.name);
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
  return uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Archivo subido");
    return getDownloadURL(snapshot.ref);
  }).then((downloadURL => {
    console.log("URL", downloadURL);
    return downloadURL;
  }));
}


function altaNota(contenidoNota, file) {
    console.log("altaNota");

    const docRef = addDoc(collection(db, "todos"), {
        texto: contenidoNota,
        URL: file,
        prioridad: "baja",
        completada: false,
        fecha: new Date(),
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    });
}



function marcarCompletada(id, completada) {
  const docRef = doc(db, "todos", id);
  if (completada) {
    completada = false;
  } else {
    completada = true;
  }
  updateDoc(docRef, {
    completada: completada,
  });
  console.log("marcarCompletada con id" + id);
}

import { getDocs, query, where } from "firebase/firestore";

async function borrarCompletadas() {
  const q = query(collection(db, "todos"), where("completada", "==", true));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });

  console.log("borrarCompletadas");
}

function eliminarNota(id) {
  deleteDoc(doc(db, "todos", id));
  console.log("eliminarNota con id" + id);
}

function establecerPrioridadBaja(id) {
  const docRef = doc(db, "todos", id);
  updateDoc(docRef, {
    prioridad: "baja",
  });
  console.log("subirPrioridad con id" + id);
}

function establecerPrioridadMedia(id) {
  const docRef = doc(db, "todos", id);
  updateDoc(docRef, {
    prioridad: "media",
  });
  console.log("subirPrioridad con id" + id);
}

function establecerPrioridadAlta(id) {
  const docRef = doc(db, "todos", id);
  updateDoc(docRef, {
    prioridad: "alta",
  });
  console.log("subirPrioridad con id" + id);
}

function tiempoDesdeCreacion(timestamp) {
    const ahora = Date.now();
    const tiempoNota = timestamp.seconds * 1000;
    const diferencia = Math.abs(ahora - tiempoNota);

    const minutos = Math.floor(diferencia / 60000); 

    return minutos;
}

</script>

<template>

<cabecera @nuevaNota="altaNota" @borrarCompletadas="borrarCompletadas" @nuevoArchivo="subirAdjunto"></cabecera>
  <!-- <input type="file" id="subirFichero" name="adjunto" accept="image/png, image/jpg" @change="subirAjunto($event)"> -->

  <ul class="notas">
    <li v-for="todo in todos" :key="todo.id">
      <h4> {{ todo.texto }} </h4>
      <p>{{ todo.prioridad }} Creada hace: {{ tiempoDesdeCreacion(todo.fecha) }} min {{ todo.completada }}</p>
      <!-- <img :src="todo.URL"> -->
      <button @click="eliminarNota(todo.id)">Eliminar</button>
      <button @click="establecerPrioridadAlta(todo.id)">Alta</button>
      <button @click="establecerPrioridadMedia(todo.id)">Media</button>
      <button @click="establecerPrioridadBaja(todo.id)">Baja</button>
      <input type="checkbox" v-model="todo.completada" @click="marcarCompletada(todo.id, todo.completada)" value="Completado">
    </li>
  </ul>
</template>

<style scoped>


</style>


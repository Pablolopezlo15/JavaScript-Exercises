<script setup>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useCollection } from 'vuefire'
import { collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore"; 
import { useFirestore } from 'vuefire';
import { query, where } from "firebase/firestore";  
import { getAuth } from "firebase/auth";
import cabecera from './cabecera.vue'

let db = useFirestore();
// const todos = useCollection(collection(db, 'todos'));

const auth = getAuth();
let uid = auth.currentUser.uid;
console.log(uid);

const coleccion = collection(db, "todos");
const list = useCollection(query(coleccion, where("idUsuario", "==", uid)));


// function subirAdjunto(event) {
//   console.log("subirAdjunto");
//   const file = event.target.files[0];
//   console.log(file.name);
//     const storage = getStorage();
//     const storageRef = ref(storage, file.name);
//     uploadBytes(storageRef, file).then((snapshot) => {
//       console.log("Archivo subido");
//       return getDownloadURL(snapshot.ref);
//     }).then((downloadURL => {
//       console.log("URL", downloadURL);
//     }));
// }
async function subirAdjunto(event) {
  console.log("subirAdjunto");
  const fileToUpload = event.target.files[0];
  console.log(fileToUpload.name);
  const storage = getStorage();
  const storageRef = ref(storage, fileToUpload.name);
  const snapshot = await uploadBytes(storageRef, fileToUpload);
  file = await getDownloadURL(snapshot.ref);
  console.log("URL", file);
}
let contenidoNota = "";
let file = "";

function altaNota(contenidoNota, downloadURL, uid) {
  console.log(downloadURL)
  const docRef = addDoc(collection(db, "todos"), {
    idUsuario: uid,
    texto: contenidoNota,
    URL: downloadURL,
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

function verArchivo(url) {
  window.open(url);
}

</script>

<template>
  <cabecera @borrarCompletadas="borrarCompletadas" @nuevoArchivo="subirAdjunto"></cabecera>
  <nav>
    <input type="text" v-model="contenidoNota" @keyup.enter="altaNota(contenidoNota, file, uid)" placeholder="Escribe tu nota" name="contenidoNota">
    <button @click="altaNota(contenidoNota, file, uid)">Alta Nota</button>
    <input type="file" id="subirFichero" name="adjunto" accept="image/png, image/jpg" @change="subirAdjunto($event)">    <button @click="borrarCompletadas">Borrar Completadas</button>
  </nav>
  <ul>
    <li v-for="todo in list" :key="todo.id" >
      <h4> {{ todo.texto }} </h4>
      <p>{{ todo.prioridad }} Creada hace: {{ tiempoDesdeCreacion(todo.fecha) }} min {{ todo.completada }}</p>
      <button @click="eliminarNota(todo.id)">Eliminar</button>
      <button @click="establecerPrioridadAlta(todo.id)">Alta</button>
      <button @click="establecerPrioridadMedia(todo.id)">Media</button>
      <button @click="establecerPrioridadBaja(todo.id)">Baja</button>
      <input type="checkbox" v-model="todo.completada" @click="marcarCompletada(todo.id, todo.completada)" value="Completado">
      <p v-if="todo.URL != ''">Archivo adjunto: <button @click="verArchivo(todo.URL)">Ver</button></p>
    </li>
  </ul>
</template>

<style scoped>


</style>


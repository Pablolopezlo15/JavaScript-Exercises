<script setup>
import { useCollection } from 'vuefire'
import { collection, addDoc } from "firebase/firestore"; 
import { useFirestore } from 'vuefire';

let db = useFirestore();
const todos = useCollection(collection(db, 'todos'))
let contenidoNota = "";

function altaNota() {
  console.log("altaNota");
  const docRef = addDoc(collection(db, "todos"), {
    texto: contenidoNota,
    prioridad: "baja",
  });

}

</script>

<template>
  <input type="text" v-model="contenidoNota"><button @click="altaNota">Alta Nota</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.texto }} {{ todo.prioridad }}</span>
    </li>
  </ul>
</template>

<style scoped>


</style>


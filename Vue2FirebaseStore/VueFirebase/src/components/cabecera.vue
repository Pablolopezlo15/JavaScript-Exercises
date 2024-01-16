<script setup>
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { ref } from "vue";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
const lanzarEvento = defineEmits(["nuevaNota", "borrarCompletadas", "nuevoArchivo"] );

const auth = getAuth();
const provider = new GoogleAuthProvider();

let user = ref(auth.currentUser);
if (user) {
    let uid = user.uid;
}

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
      console.log(user.displayName);
      router.push("/privada");
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

function iniciarSesionCorreo(email, password) {
    console.log("iniciarSesionCorreo");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

function cerrarSesion() {

    signOut(auth).then(() => {
    // Sign-out successful.
    user = null;
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
        <ul v-if="user">
            <p>Bienvenido, {{ user.displayName }}.</p>
            <img class="foto" :src="user.photoURL" alt="">
            <button @click="cerrarSesion">Cerrar Sesión</button>
        </ul>
        <ul v-else>
            <RouterLink to="/iniciarsesion">Iniciar Sesion</RouterLink>
            <RouterView></RouterView>
            <button @click="iniciarSesion">Iniciar Sesion con <i class="ri-google-fill"></i></button>     
        </ul>
    </header>
</template>
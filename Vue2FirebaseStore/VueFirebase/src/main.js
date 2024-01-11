import './assets/styles.css'

import { createApp } from 'vue'
import App from './index.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";


import privada from './components/privada.vue'
import Inicio from './components/Inicio.vue'
import Administracion from './components/Administracion.vue';
import { createRouter, createWebHistory, onBeforeRouteUpdate } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: Inicio
  },
  {
    path: '/privada',
    name: 'privada',
    component: privada,
  },
  { 
    path: '/administracion', 
    component: Administracion 
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

let estasIdentificado = false;
router.beforeEach((to, from) => {

  if (to.path == "/privada" && !estasIdentificado) {
    console.log("ruta privada");
    return false;
  }
});

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  const uid = user.uid;
  console.log("usuario logeado");
  estasIdentificado = true;
  // ...
} else {
  // User is signed out
  estasIdentificado = false;
  

  // ...
}
});


const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})
app.use(router)
app.mount('#app')
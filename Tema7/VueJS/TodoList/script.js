const { createApp } = Vue
    
createApp({
    data() {
        return {
            lista: [],
            newObject: '',
            mostrar: false,
            filtrar: '',
            mostrarFiltrar: false,
            total: 0,
            prioridad: 0,
            isActive: false,        }
    },
    methods: {
        añadirObjeto() {
            if (this.newObject != '') {
                this.lista.push({
                    texto: this.newObject,
                    prioridad: 0,
                    fecha: Date.now(),
                    isActive: false,

                });
                console.log(this.lista);
                this.guardarEnLocalStorage();
                this.newObject = '';
                this.total++;
            }

            this.mostrar = true;

        },

        eliminarNota(object) {
            const index = this.lista.indexOf(object);
            if (index !== -1) {
                this.lista.splice(index, 1);
                this.total--;
                this.guardarEnLocalStorage();
            }
        },

        eliminarCompletadas() {
            this.lista = this.lista.filter(item => !item.isActive);
            this.guardarEnLocalStorage();
        },

        marcarComoCompletada(object) {
            object.isActive = !object.isActive;
            this.guardarEnLocalStorage();
        },

        cambiarPrioridadAlta(object) {
            if (object.prioridad < 2){
                object.prioridad = 2;
            }
            this.guardarEnLocalStorage();
        },

        cambiarPrioridadBaja(object) {
            if (object.prioridad > 0){
                object.prioridad = 0;
            }
            this.guardarEnLocalStorage();
        },

        cambiarPrioridadMedia(object) {
            if (object.prioridad != 1){
                object.prioridad = 1;
            }
            this.guardarEnLocalStorage();
        },

        guardarEnLocalStorage() {
            localStorage.setItem('notas', JSON.stringify(this.lista));
        },

        cargarDesdeLocalStorage() {
            const notasGuardadas = localStorage.getItem('notas');
            if (notasGuardadas) {
              this.lista = JSON.parse(notasGuardadas);
            }
        },
    },
    computed: {
        listaFiltrada() {
            let aux = this.lista;
            if (this.mostrarFiltrar) {
                aux = aux.filter(item => item.texto.includes(this.filtrar));
            }
            return aux.slice().sort((a, b) => Number(b.prioridad) - Number(a.prioridad));
        }
    },
    mounted() {
        this.cargarDesdeLocalStorage();

    }

}).mount('#app')
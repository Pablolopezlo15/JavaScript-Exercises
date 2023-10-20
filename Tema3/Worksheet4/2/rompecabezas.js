class Juego {
    constructor(dimensiones) {
        this.dimensiones = dimensiones;
        this.tablero = [];
        this.movimientos = 0;
        this.tiempoInicio = null;
        this.tiempoFinal = null;
        this.blanco = { fila: dimensiones - 1, columna: dimensiones - 1 };

        this.crearTablero();
        this.mezclarTablero(500); // Mezclar el tablero aleatoriamente para empezar
        this.iniciarTiempo();
    }

    crearTablero() {
        for (let i = 0; i < this.dimensiones; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < this.dimensiones; j++) {
                this.tablero[i][j] = i * this.dimensiones + j + 1;
            }
        }
        this.tablero[this.dimensiones - 1][this.dimensiones - 1] = null; // El espacio en blanco
    }

    mezclarTablero(veces) {
        for (let i = 0; i < veces; i++) {
            const movimientosPosibles = this.obtenerMovimientosPosibles();
            const movimientoAleatorio = movimientosPosibles[Math.floor(Math.random() * movimientosPosibles.length)];
            this.moverBlanco(movimientoAleatorio);
        }
    }

    iniciarTiempo() {
        this.tiempoInicio = new Date();
    }

    finalizarTiempo() {
        this.tiempoFinal = new Date();
    }

    obtenerMovimientosPosibles() {
        const movimientos = [];
        const filaBlanco = this.blanco.fila;
        const columnaBlanco = this.blanco.columna;

        if (filaBlanco > 0) {
            movimientos.push("arriba");
        }
        if (filaBlanco < this.dimensiones - 1) {
            movimientos.push("abajo");
        }
        if (columnaBlanco > 0) {
            movimientos.push("izquierda");
        }
        if (columnaBlanco < this.dimensiones - 1) {
            movimientos.push("derecha");
        }

        return movimientos;
    }

    moverBlanco(movimiento) {
        const filaBlanco = this.blanco.fila;
        const columnaBlanco = this.blanco.columna;

        switch (movimiento) {
            case "arriba":
                this.intercambiar(filaBlanco, columnaBlanco, filaBlanco - 1, columnaBlanco);
                this.blanco.fila--;
                break;
            case "abajo":
                this.intercambiar(filaBlanco, columnaBlanco, filaBlanco + 1, columnaBlanco);
                this.blanco.fila++;
                break;
            case "izquierda":
                this.intercambiar(filaBlanco, columnaBlanco, filaBlanco, columnaBlanco - 1);
                this.blanco.columna--;
                break;
            case "derecha":
                this.intercambiar(filaBlanco, columnaBlanco, filaBlanco, columnaBlanco + 1);
                this.blanco.columna++;
                break;
            default:
                console.log("Movimiento no válido.");
                break;
        }

        this.movimientos++;
        this.dibujar();
        if (this.haGanado()) {
            this.finalizarTiempo();
            const tiempoTranscurrido = (this.tiempoFinal - this.tiempoInicio) / 1000; // en segundos
            console.log(`¡Has ganado en ${this.movimientos} movimientos y ${tiempoTranscurrido} segundos!`);
        }
    }

    intercambiar(fila1, columna1, fila2, columna2) {
        const temp = this.tablero[fila1][columna1];
        this.tablero[fila1][columna1] = this.tablero[fila2][columna2];
        this.tablero[fila2][columna2] = temp;
    }

    haGanado() {
        const valorEsperado = 1;
        for (let i = 0; i < this.dimensiones; i++) {
            for (let j = 0; j < this.dimensiones; j++) {
                if (this.tablero[i][j] !== null && this.tablero[i][j] !== valorEsperado) {
                    return false;
                }
                valorEsperado++;
            }
        }
        return true;
    }

    dibujar() {
        for (let i = 0; i < this.dimensiones; i++) {
            let fila = "";
            for (let j = 0; j < this.dimensiones; j++) {
                const valor = this.tablero[i][j];
                fila += valor === null ? "  " : valor.toString().padStart(2, "0") + " ";
            }
            console.log(fila);
        }
        console.log("-----------------");
    }
}

const dimensiones = prompt("Introduce el número de filas y columnas que quieres que tenga tu tablero cuadrado");
const juego1 = new Juego(dimensiones);

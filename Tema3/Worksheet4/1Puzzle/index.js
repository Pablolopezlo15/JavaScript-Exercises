let puzzleCompleto = [[1, 2, 3, 4],
                      [5, 6, 7, 8],
                      [9, 10, 11, 12],
                      [13, 14, 15, null]];


class Juego {
    constructor(dimensiones){
        this.dimensiones = dimensiones;
        this.tablero = [];
        this.movimiento = null;
        this.blanco = this.tablero.indexOf(null);

    }

    crearTablero(){
        for(let i = 0; i<this.dimensiones; i++){
            this.tablero [i] = [];
            for(let j = 0; j<this.dimensiones; j++){
                this.tablero [i][j] = i*this.dimensiones+j+1;
            }
        }
    }

    crearBlanco(){
        this.tablero [this.dimensiones-1][this.dimensiones-1] = null;
        console.log(this.tablero);
        console.log(this.blanco)
    }

    moverBlanco(movimiento){
        movimiento = this.movimiento;
        if(movimiento == "arriba"){

        }


    }

    dibujar(){
        console.log(tablero);
    }
}
juego1 = new Juego(5);
juego1.crearTablero();
juego1.crearBlanco();
juego1.moverBlanco("arriba")

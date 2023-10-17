class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.ganadas = 0;
        this.perdidas = 0;
        this.eleccion = null;
    }

    hacerEleccion(eleccion){
        this.eleccion = eleccion;
    }
}

class PiedraPapelTijeras{
    constructor() {
        this.jugadores = [];

    }

    añadirJugador(Jugador){
        if(this.jugadores.length<2){
            this.jugadores.push(Jugador);
            console.log("Jugador añadido");
        }
        else{
            console.log("Jugadores completos");
        }
    }

    jugar() {
        if(this.jugadores.length==2){

            if ((this.jugadores[0].eleccion == 'piedra' && this.jugadores[1].eleccion == 'tijeras')
             || (this.jugadores[0].eleccion == 'tijeras' && this.jugadores[1].eleccion == 'papel')
             || (this.jugadores[0].eleccion == 'papel' && this.jugadores[1].eleccion == 'piedra')) {
                this.jugadores[0].wins++;
                this.jugadores[1].losses++;
                console.log(`¡${this.jugadores[0].nombre} ha ganado!`);
            } 
            else if ((this.jugadores[1].eleccion == 'piedra' && this.jugadores[0].eleccion == 'tijeras')
                 || (this.jugadores[1].eleccion == 'tijeras' && this.jugadores[0].eleccion == 'papel')
                 || (this.jugadores[1].eleccion == 'papel' && this.jugadores[0].eleccion == 'piedra')) {
                    this.jugadores[1].wins++;
                    this.jugadores[0].losses++;
                    console.log(`¡${this.jugadores[1].nombre} ha ganado!`);
            } 
            else {
                console.log('¡Empate!');
            }
        
            this.jugadores[0].eleccion = null;
            this.jugadores[1].eleccion = null;

        }
        else {
            console.log("Faltan Jugadores");
        }

    }
}

Juego = new PiedraPapelTijeras();
Pablo = new Jugador("Pablo");
Juan = new Jugador("Juan");
Juego.añadirJugador(Pablo);
Juego.añadirJugador(Juan);
Pablo.hacerEleccion("tijeras");
Juan.hacerEleccion("piedra");
Juego.jugar();
class cat {
    constructor(nombre,cansancio,hambre,soledad,felicidad){
        this.name = nombre;
        this.tiredness = cansancio;
        this.hunger = hambre;
        this.lonliness = soledad;
        this.happiness = felicidad;
    }
    
    feed(){
        this.hunger-1;
    }
   
    sleep(){
        this.tiredness-1;
    }

    pet(){
        this.lonliness-1;
    }

    MostrarHambre() {
        if(this.hunger<5){
            console.log(this.nombre + " tiene hambre.");
        }
        if(this.hunger>8){
            console.log(this.nombre + " tiene mucha hambre.");
        }
        if(this.hunger<3){
            console.log(this.nombre + " no tiene hambre.");
        }
        
    }
    MostrarCansancio() {
        if(this.tiredness<5){
            console.log(this.nombre + " está cansado.");
        }
        if(this.tiredness>8){
            console.log(this.nombre + " está muy cansado.");
        }
        if(this.tiredness<3){
            console.log(this.nombre + " no está cansado.");
        }    
    }
    MostrarNombre(){
        console.log(this.nombre);
    }


}

let gato1 = new cat("Patitas", 7,3,4,10);

gato1.MostrarCansancio;
gato1.MostrarNombre;
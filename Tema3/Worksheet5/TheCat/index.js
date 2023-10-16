class cat {
    constructor(nombre,cansancio,hambre,soledad,felicidad){
        this.nombre = nombre;
        this.tiredness = cansancio;
        this.hunger = hambre;
        this.lonliness = soledad;
        this.happiness = felicidad;
    }
    
    feed(){
        this.hunger-=1;
    }
   
    sleep(){
        this.tiredness-=1;
    }

    pet(){
        this.lonliness-=1;
    }

    play(){
        this.happiness+=1;
    }
    MostrarHambre() {
        if(this.hunger>=4 && this.hunger<=7){
            console.log(this.nombre + " tiene hambre.");
        }
        if(this.hunger>=8){
            console.log(this.nombre + " tiene mucha hambre.");
        }
        if(this.hunger<=3){
            console.log(this.nombre + " no tiene hambre.");
        }
        
    }
    MostrarCansancio() {
        if(this.tiredness<=3){
            console.log(this.nombre + " no está cansado.");
        } 
        if(this.tiredness>=4 && this.tiredness<=7){
            console.log(this.nombre + " está cansado.");
        }
        if(this.tiredness>=8){
            console.log(this.nombre + " está muy cansado.");
        }
   
    }
    MostrarFelicidad() {
        if(this.happiness<=3){
            console.log(this.nombre + " está triste.");
        } 
        if(this.happiness>=4 && this.happiness<=7){
            console.log(this.nombre + " está contento.");
        }
        if(this.happiness>=8){
            console.log(this.nombre + " está muy contento.");
        }
   
    }
    MostrarSoledad() {
        if(this.lonliness<=3){
            console.log(this.nombre + " se siente muy acompañado.");
        } 
        if(this.lonliness>=4 && this.lonliness<=7){
            console.log(this.nombre + " se siente normal.");
        }
        if(this.lonliness>=8){
            console.log(this.nombre + " se siente solo.");
        }
   
    }

}

let gato1 = new cat ("Patitas", 10, 3, 4, 3);


gato1.MostrarCansancio();
gato1.MostrarFelicidad();
gato1.MostrarSoledad();
gato1.MostrarHambre();
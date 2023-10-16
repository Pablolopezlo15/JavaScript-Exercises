class cat {
    constructor(tiredness,hunger,lonliness,happiness){
        this.tiredness = cansancio;
        this.hunger = hambre;
        this.lonliness = soledad;
        this.happiness = felicidad;
    }
    
    feed(){
        return this.hunger-1;
    }

    sleep(){
        return this.tiredness-1;
    }

    pet(){
        return this.lonliness-1;
    }

}
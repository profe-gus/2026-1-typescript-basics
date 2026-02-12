class Ave {

    private plumas:string;
    private color:string;
    private nombre:string;

    constructor(){}

    obtenerPlumas():string{
        return this.plumas;
    }

    establecerPlumas(plumas:string){
        this.plumas=plumas;
    }

    set ponerColor(color:string){
        this.color=color;
    }

    get traerColor():string{
        return this.color;
    }



    get obtenerColor():string{
        return this.color;
    }
    
    


}

const pollo = new Ave();

pollo.establecerPlumas("Lisas");
pollo.obtenerPlumas();
pollo.ponerColor="rojo";
pollo.traerColor;
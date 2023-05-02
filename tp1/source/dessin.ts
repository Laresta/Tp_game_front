class Dessin {
    public formes_ : Array<Forme>;

    constructor(){
        this.formes_ = Array<Forme>();
    }
    ajouter(forme : Forme){
        this.formes_.push(forme);
    }    
    tracer(canvas : HTMLCanvasElement){
        this.formes_.forEach(forme => {
            forme.tracer(canvas);
          });
    }
    translater(dx: number , dy:number){
        this.formes_.forEach(forme => {
            forme.translater(dx,dy);
          });
    }
}
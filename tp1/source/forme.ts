class Forme{
    public x_ : number;
    public y_ : number;
    public epaisseur_ : number;
    public couleurTrait : string;
    public couleurPlein : string;

    constructor(x : number , y: number) {
         this.x_ = x;
         this.y_ = y;
         this.epaisseur_ = 10;
         this.couleurTrait = "#000";
         this.couleurPlein = "#FFF";   
    }

    tracer(canvas : HTMLCanvasElement){

    }

    translater(dx : number , dy: number){
        this.x_ += dx;
        this.y_ += dy;
    }
}
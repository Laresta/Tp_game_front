class Rectangle extends Forme{

    public h_ : number;
    public l_ : number;

    constructor ( CoinX : number ,CoinY : number , largeur : number , hauteur: number){
        super(CoinX , CoinY);
        this.l_ = largeur;
        this.h_ = hauteur;
    }
   
    override tracer (canvas : HTMLCanvasElement){
        let context : CanvasRenderingContext2D = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.x_,this.y_);   
        context.lineTo(this.x_+this.l_,this.y_);
        context.lineTo(this.x_+this.l_,this.y_+this.h_);
        context.lineTo(this.x_,this.y_+this.h_);
        context.lineTo(this.x_,this.y_);
        context.strokeStyle = "#ffffff";
        context.fillStyle = "#000000";
        context.fill();
        context.stroke();
    }
}
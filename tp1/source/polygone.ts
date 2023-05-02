class Polygone extends Forme{
    public r_ : number;
    public n_ : number;
    public a0_ : number;

    constructor(centreX : number , centreY : number ,rayon : number , nbPoint : number , angle0 : number){
        super(centreX, centreY);
        this.r_ = rayon ; 
        this.n_ = nbPoint;
        this.a0_ = angle0;    
    }

    override tracer(canvas : HTMLCanvasElement){
        let context : CanvasRenderingContext2D = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.x_+this.r_,this.y_);
        for (let i : number = 1 ; i <= this.n_ ; i++){ 
            let x  = this.x_ + this.r_ * Math.cos(this.a0_*i);
            console.log(x);
            let y  = this.y_ + this.r_ * Math.sin(this.a0_*i);
            console.log(y);           
            context.lineTo(x, y);
        }
        context.strokeStyle = "#ffffff";
        context.fillStyle = "#000000";
        context.fill();
        context.stroke();
    }
}
class Palet extends Anime{
    
    private ecouteurSuivre_ : any;

    constructor(palet : HTMLImageElement){
        super(palet);
        this.setImage("palet.png", 75,50);
        this.ecouteurSuivre_ = (evt : MouseEvent) =>{
            this.suivre(evt);
        };
    }

    public suivre(evt : MouseEvent){
        let x  = evt.clientX - this.getParent().getX()-this.getWidth()/2;
        if (this.xmax_ < x && this.xmin_ > x) {
            this.setX(x);
        }
        
    }

    public override animer(){
        window.addEventListener("mousemove", this.ecouteurSuivre_);
    }

    public override figer(){
        window.removeEventListener("mousemove", this.ecouteurSuivre_);
    }
}
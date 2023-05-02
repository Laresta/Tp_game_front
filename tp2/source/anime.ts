class Anime extends Sprite{
    public xmax_ : number;
    public xmin_ : number;
    public ymin_: number;
    public ymax_ : number;

    constructor(anime : HTMLImageElement) {
        super(anime);
    }

    public animer(){

    }

    public figer(){

    }

    public setLimites(zone : Sprite){
        this.xmax_ = zone.getX();
        this.ymax_ = zone.getY();
        this.xmin_ = zone.getX() +zone.getWidth()- this.getWidth();
        this.ymin_ = zone.getY()+zone.getHeight()- this.getHeight();
    }
}
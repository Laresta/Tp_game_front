"use strict";
class Balle extends Anime {
    vx_;
    vy_;
    nx_;
    ny_;
    timerAnim_;
    scene_;
    vmax_;
    colle_;
    ecouteurDecoller_;
    constructor(balle, scene) {
        super(balle);
        this.scene_ = scene;
        this.setImage("ball.svg", 40, 40);
        this.vx_ = 1;
        this.vy_ = 1;
        this.timerAnim_ = 0;
        this.vmax_ = 8;
        this.initVitesse(3);
        this.colle_ = true;
        this.ecouteurDecoller_ = (evt) => {
            this.colle_ = false;
        };
    }
    animer() {
        this.timerAnim_ = setInterval(() => {
            this.bouger();
        }, 1000 / 120);
        window.addEventListener("click", this.ecouteurDecoller_);
    }
    bouger() {
        if (this.colle_) {
            this.ny_ = this.scene_.palet_.getY() - this.getWidth();
            this.nx_ = this.scene_.palet_.getWidth() / 2 + this.scene_.palet_.getX() - this.getWidth() / 2;
        }
        else {
            this.nx_ = this.getX() - this.vx_;
            this.ny_ = this.getY() - this.vy_;
            // rebond de la balle sur les cotés de la scene 
            this.rebondirBordure();
            //rebond sur le palet 
            this.rebondirPalet();
            //rebond sur les briques
            this.rebondirBriques();
        }
        this.setXY(this.nx_, this.ny_);
    }
    rebondirBordure() {
        if ((this.getX() > this.xmin_)) {
            this.nx_ = this.xmin_;
            this.vx_ = -this.vx_;
        }
        else if (this.getX() < this.xmax_) {
            this.nx_ = this.xmax_;
            this.vx_ = -this.vx_;
        }
        else if ((this.getY() > this.ymin_)) {
            this.ny_ = this.ymin_;
            this.vy_ = -this.vy_;
            this.figer();
            this.scene_.palet_.figer();
            this.scene_.perdre();
        }
        else if (this.getY() < this.ymax_) {
            this.ny_ = this.ymax_;
            this.vy_ = -this.vy_;
        }
    }
    rebondirPalet() {
        let circle = this.getCircle();
        let rect = this.scene_.palet_.getRectangle();
        if (Sprite.collision(circle, rect)) {
            this.ny_ = this.ny_ - this.getHeight();
            this.vx_ = -this.vx_;
            this.vy_ = -this.vy_;
            this.accelerer(1.10);
        }
        /*
        while (Sprite.collision(circle, rect)) {
            circle.cx_ -= ;
        }
        */
    }
    rebondirBriques() {
        let circle = this.getCircle();
        /*
        this.scene_.briques_.forEach(brique => {
            if(Sprite.collision(circle, brique.getRectangle())){
                this.ny_ = this.ny_ + this.getHeight();
                this.vx_ = -this.vx_;
                this.vy_ = -this.vy_;
                this.accelerer(0.90);
                this.scene_.removeChild(brique);
                return;
            }
        }); */
        for (let i = 0; i < this.scene_.briques_.length; i++) {
            if (Sprite.collision(circle, this.scene_.briques_[i].getRectangle())) {
                //this.ny_ = this.ny_ + this.getHeight();
                this.ny_ = this.scene_.briques_[i].getBottom();
                this.vx_ = -this.vx_;
                this.vy_ = -this.vy_;
                this.accelerer(0.95);
                this.scene_.removeChild(this.scene_.briques_[i]);
                this.scene_.briques_.splice(i, 1);
                this.scene_.augmenterScore();
                break;
            }
        }
    }
    figer() {
        clearInterval(this.timerAnim_);
        window.removeEventListener("click", this.ecouteurDecoller_);
    }
    initVitesse(v) {
        this.vx_ = (Math.random() * 4) - 2;
        this.vy_ = (Math.random() * 4) - 2;
        let vr = Math.sqrt(Math.pow(this.vx_, 2) + Math.pow(this.vy_, 2));
        this.vx_ = (this.vx_ / vr) * v;
        this.vy_ = (this.vy_ / vr) * v;
    }
    getVitesse() {
        return Math.sqrt(Math.pow(this.vx_, 2) + Math.pow(this.vy_, 2));
    }
    accelerer(fv) {
        let v = this.getVitesse();
        if (this.vx_ < this.vmax_) {
            this.vx_ *= fv;
        }
        if (this.vy_ < this.vmax_) {
            this.vy_ *= fv;
        }
    }
}

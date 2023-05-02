"use strict";
class Palet extends Anime {
    ecouteurSuivre_;
    constructor(palet) {
        super(palet);
        this.setImage("palet.png", 75, 50);
        this.ecouteurSuivre_ = (evt) => {
            this.suivre(evt);
        };
    }
    suivre(evt) {
        let x = evt.clientX - this.getParent().getX() - this.getWidth() / 2;
        if (this.xmax_ < x && this.xmin_ > x) {
            this.setX(x);
        }
    }
    animer() {
        window.addEventListener("mousemove", this.ecouteurSuivre_);
    }
    figer() {
        window.removeEventListener("mousemove", this.ecouteurSuivre_);
    }
}

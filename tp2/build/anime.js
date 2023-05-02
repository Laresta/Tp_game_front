"use strict";
class Anime extends Sprite {
    xmax_;
    xmin_;
    ymin_;
    ymax_;
    constructor(anime) {
        super(anime);
    }
    animer() {
    }
    figer() {
    }
    setLimites(zone) {
        this.xmax_ = zone.getX();
        this.ymax_ = zone.getY();
        this.xmin_ = zone.getX() + zone.getWidth() - this.getWidth();
        this.ymin_ = zone.getY() + zone.getHeight() - this.getHeight();
    }
}

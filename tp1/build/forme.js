"use strict";
var Forme = /** @class */ (function () {
    function Forme(x, y) {
        this.x_ = x;
        this.y_ = y;
        this.epaisseur_ = 10;
        this.couleurTrait = "#000";
        this.couleurPlein = "#FFF";
    }
    Forme.prototype.tracer = function (canvas) {
    };
    Forme.prototype.translater = function (dx, dy) {
        this.x_ += dx;
        this.y_ += dy;
    };
    return Forme;
}());

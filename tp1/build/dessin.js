"use strict";
var Dessin = /** @class */ (function () {
    function Dessin() {
        this.formes_ = Array();
    }
    Dessin.prototype.ajouter = function (forme) {
        this.formes_.push(forme);
    };
    Dessin.prototype.tracer = function (canvas) {
        this.formes_.forEach(function (forme) {
            forme.tracer(canvas);
        });
    };
    Dessin.prototype.translater = function (dx, dy) {
        this.formes_.forEach(function (forme) {
            forme.translater(dx, dy);
        });
    };
    return Dessin;
}());

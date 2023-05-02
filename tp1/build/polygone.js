"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polygone = /** @class */ (function (_super) {
    __extends(Polygone, _super);
    function Polygone(centreX, centreY, rayon, nbPoint, angle0) {
        var _this = _super.call(this, centreX, centreY) || this;
        _this.r_ = rayon;
        _this.n_ = nbPoint;
        _this.a0_ = angle0;
        return _this;
    }
    Polygone.prototype.tracer = function (canvas) {
        var context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.x_ + this.r_, this.y_);
        for (var i = 1; i <= this.n_; i++) {
            var x = this.x_ + this.r_ * Math.cos(this.a0_ * i);
            console.log(x);
            var y = this.y_ + this.r_ * Math.sin(this.a0_ * i);
            console.log(y);
            context.lineTo(x, y);
        }
        context.strokeStyle = "#ffffff";
        context.fillStyle = "#000000";
        context.fill();
        context.stroke();
    };
    return Polygone;
}(Forme));

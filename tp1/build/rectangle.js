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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(CoinX, CoinY, largeur, hauteur) {
        var _this = _super.call(this, CoinX, CoinY) || this;
        _this.l_ = largeur;
        _this.h_ = hauteur;
        return _this;
    }
    Rectangle.prototype.tracer = function (canvas) {
        var context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.x_, this.y_);
        context.lineTo(this.x_ + this.l_, this.y_);
        context.lineTo(this.x_ + this.l_, this.y_ + this.h_);
        context.lineTo(this.x_, this.y_ + this.h_);
        context.lineTo(this.x_, this.y_);
        context.strokeStyle = "#ffffff";
        context.fillStyle = "#000000";
        context.fill();
        context.stroke();
    };
    return Rectangle;
}(Forme));

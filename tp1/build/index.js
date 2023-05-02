"use strict";
var tab = new Array();
var toile;
var dessin = new Dessin();
function demarrer() {
    toile = document.getElementById("toile");
    var box = toile.getBoundingClientRect();
    toile.width = box.width;
    toile.height = box.height;
    var p1 = new Polygone(100, 200, 100, 3, 2 * Math.PI / 3);
    var r1 = new Rectangle(300, 600, 100, 600);
    dessin.ajouter(p1);
    dessin.ajouter(r1);
    dessin.tracer(toile);
}
function translater(dx, dy) {
    toile.getContext("2d").clearRect(0, 0, toile.width, toile.height);
    dessin.translater(dx, dy);
    dessin.tracer(toile);
}

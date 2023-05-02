let tab = new Array<Forme>();
let toile : HTMLCanvasElement;
let dessin = new Dessin();
function demarrer() {
    toile = <HTMLCanvasElement>document.getElementById("toile");
    let box : DOMRect = toile.getBoundingClientRect();
    toile.width = box.width;
    toile.height = box.height;
    let p1 = new Polygone(100,200,100,3,2*Math.PI/3);
    let r1 = new Rectangle (300,600,100,600); 
    dessin.ajouter(p1);
    dessin.ajouter(r1);
    dessin.tracer(toile);
  }
  
  function translater(dx: number , dy : number){
    toile.getContext("2d").clearRect(0,0,toile.width, toile.height);
    dessin.translater(dx,dy);
    dessin.tracer(toile);
  }


//==================================================================================================
// ANIMATION AVEC TYPESCRIPT                                                                 Jeu.ts
//==================================================================================================

// Classe  J e u //---------------------------------------------------------------------------------
class Jeu extends Scene {
 //----------------------------------------------------------------------------------------Attributs
 /* Declarer ici les attributs de la scene. */
 public balle_ : Balle;
 public zone_ : Sprite;
 public palet_ : Palet;
 public briques_ : Array<Sprite>;
 private score_ : Sprite;
 public compt : number;
 public message_: Sprite;

 //-------------------------------------------------------------------------------------Constructeur
 public constructor(element : HTMLElement) {
  super(element,false);
  this.zone_ = new Sprite(document.querySelector("#gamezone"));
  this.zone_.setHeight(this.getHeight() - 10);
  this.zone_.setWidth(this.getWidth()-10);  
  this.zone_.setXY(5,5);
  /* Ecrire ici le code qui initialise la scene. */
 }

 //--------------------------------------------------------------------------------------------start
 public override start() {
    this.compt = 0;
    this.score_ = new Sprite(document.querySelector("#affich"));
    this.score_.getElement().innerHTML= "Score: <span id='score'>"+this.compt+"</span>";
    this.score_.setXY(-75 , 50);
    this.message_ = new Sprite(document.querySelector("#message"));
    this.message_.setXY(this.zone_.getWidth()/2 -this.getWidth(), this.zone_.getHeight()/2-this.getHeight());
    this.briques_ = Array<Sprite>(); 
    let nbrcol = 9;
    let nbrligne = 5  ;
    let espacex = this.zone_.getWidth()/(nbrcol+1);
    let espacey = this.zone_.getHeight()*0.50/(nbrligne+1);
    for (let i = 0; i < nbrligne; i++) {
      for (let index = 0; index < nbrcol; index++) {
             let imgb : HTMLImageElement = document.createElement("img");
             let b = new Sprite(imgb);
             b.setImage("brique.png",50,25)
            
             this.appendChild(b);
             let bx = (index+1) * espacex - b.getWidth()/2 + this.zone_.getX() ;
             let by = (i+1) * espacey - b.getHeight()/2;
             b.setX(bx);
             b.setY(by);

             this.briques_.push(b); 
      }
    }
    let imgP : HTMLImageElement = document.createElement("img");
    this.palet_ = new Palet(imgP);
    this.appendChild(this.palet_);
    let x= (this.getWidth()/2) - (this.palet_.getWidth()/2)
    let y= (this.getHeight()) - (this.palet_.getHeight() +10);
    this.palet_.setXY(x,y);
    this.palet_.setLimites(this.zone_);
    this.palet_.animer();
    let img : HTMLImageElement = document.createElement("img");
    this.balle_ = new Balle(img , this);
    this.appendChild(this.balle_);
    x = (this.getWidth()/2) - (this.balle_.getWidth()/2);
    y =  (this.getHeight()/2) - (this.balle_.getHeight()/2)
    this.balle_.setXY(x,y);
    this.balle_.setLimites(this.zone_);
    this.balle_.animer();


  /* Ecrire ici le code qui demarre la scene. */
 }

 public augmenterScore(){
  document.querySelector("#score").textContent = ""+(++this.compt);
 }

 public gagner(){
  this.message_.getElement().textContent = "VOUS AVEZ GAGNER";
  this.message_.getElement().setAttribute('visibility', "visible");
  this.pause();
 }

 public perdre(){
  this.message_.getElement().textContent = "VOUS AVEZ PERDU";
  this.message_.getElement().setAttribute('visibility', "visible");
  //this.pause();
 }

 //--------------------------------------------------------------------------------------------pause
 public override pause() {
  /* Ecrire ici le code qui met la scene en pause. */
 }

 //------------------------------------------------------------------------------------------unpause
 public override unpause() {
  /* Ecrire ici le code qui sort la scene de la pause. */
 }

 //--------------------------------------------------------------------------------------------clean
 public override clean() {
  /* Ecrire ici le code qui nettoie la scene en vue d'un redemarrage. */
 }
}

// Fin //-------------------------------------------------------------------------------------------

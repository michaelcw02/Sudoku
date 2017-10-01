export class Option {

  constructor(x, y, value, lib) {
    this.value = value; //The idea is when a spot has value 0 will be a empty square
    this.x = x;
    this.y = y;
    this.original = { x : this.x, y : this.y}
    this.lib = lib;
  }

  show(){
    this.lib.textSize(24);
    this.lib.fill(0, 102, 153); 
    this.lib.ellipse( this.x, this.y, 50, 50); 
    this.lib.fill(255); 
    this.lib.text(this.value, this.x - 5, this.y + 10);
  }

  restart(){
    this.x = this.original.x;
    this.y = this.original.y;
  }

  collides(x, y){
    if(this.lib.dist(this.x, this.y, x, y) < 40)
      return true;
    return false;
  }

}
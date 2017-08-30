export class Option {

  constructor(x, y, value) {
    this.value = value; //The idea is when a spot has value 0 will be a empty square
    this.x = x;
    this.y = y;
    this.original = { x : this.x, y : this.y}
  }

  show(){
    textSize(24);
    fill(0, 102, 153); 
    ellipse( this.x, this.y, 30, 30); 
    fill(255); 
    text(this.value, this.x - 5, this.y + 10);
  }

  restart(){
    this.x = this.original.x;
    this.y = this.original.y;
  }

  collides(x, y){
    if(dist(this.x, this.y, x, y) < 30)
      return true;
    return false;
  }

}
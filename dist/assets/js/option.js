export class Option {

    constructor(x, y, value, lib) {
        this.value = value 
        this.x = x
        this.y = y
        this.original = { x: this.x, y: this.y }
        this.lib = lib
        this.selected = false
    }

    show() {
        this.lib.textSize(24)
        this.lib.textFont("Comfortaa")
        this.selected ? this.lib.fill(0, 102, 153) : this.lib.fill(255, 0, 0)
        this.lib.ellipse(this.x, this.y, 50, 50)
        this.lib.fill(255)
        this.lib.text(this.value, this.x - 5, this.y + 10)
    }

    restart() {
        this.x = this.original.x;
        this.y = this.original.y;
    }

    update(mouseX, mouseY){
        if(this.selected){
            this.x = mouseX
            this.y = mouseY
        }
        else
            this.restart()
    }

    collides(x, y){ 
        return (this.lib.dist(this.x, this.y, x, y) < 40) //40px is the ratio of the cirlce of the option
    }

}
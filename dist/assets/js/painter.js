export class Painter { //This class wil be in charge of paint in the matrix

    constructor(dimension, lib) {
        this.dimension = dimension;
        this.lib = lib;
    }

  paintSudoku(sudoku){ 
    sudoku.grid.forEach( (x, i) => x.forEach( (y, j) => {
      this.lib.fill(255)
      this.lib.rect(i * this.dimension, j * this.dimension, this.dimension, this.dimension);
      this.paintBorderLines(i, j);  
    }))
    this.paintNumbers(sudoku);     
  }

  paintNumbers(sudoku){ //this one could be done with filter x.forEach.filter.forEach
    for(let i = 0; i < sudoku.rows; i++)
      for(let j = 0; j < sudoku.cols; j++)
        if(sudoku.getValue(i, j) !== 0)
          this.paintNumber(sudoku.getValue(i, j), i, j, sudoku.getSpot(i, j).state);
  }

  paintNumber(number, i, j, state = "possible") {
      this.lib.textSize(this.dimension - 10);
      this.lib.textFont("Comfortaa");
      switch(state){
          case "default" : 
            this.lib.fill(0);
            break;
          case "possible" : 
            this.lib.fill(0, 0, 255);
            break;
          case "heuristic" :
            this.lib.fill(0, 255, 0);
            break;
      }
      this.lib.text(number, j * this.dimension + 20, (i + 1) * this.dimension - 10);
  }

  paintBorderLines(row, col) {
      this.lib.fill(50);
      if (col % 3 === 0) {
          if (row % 3 === 0)
              this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension);
          this.lib.rect(row * this.dimension, col * this.dimension, this.dimension, 5);
      } else {
          if (row % 3 === 0)
              this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension);
      }
      if (col === 8)
          this.lib.rect(row * this.dimension, (col + 1) * this.dimension, this.dimension, 5);
      if (row === 8)
          this.lib.rect((row + 1) * this.dimension, col * this.dimension, 5, this.dimension);
  }
}
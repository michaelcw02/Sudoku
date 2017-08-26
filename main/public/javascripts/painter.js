class Painter{ //This class wil be in charge of paint in the matrix

  constructor(dimension){
      this.dimension = dimension;
  }

  paintSudoku(sudoku){ //Make more elegant
    for(let i = 0; i < sudoku.rows; i++)
      for(let j = 0; j < sudoku.cols; j++){
        fill(255);
        rect(i * this.dimension, j * this.dimension, this.dimension, this.dimension);
        this.paintBorderLines(i, j);
      }
      
    this.paintNumbers(sudoku);     
  }

  paintNumbers(sudoku){
    for(let i = 0; i < sudoku.rows; i++)
      for(let j = 0; j < sudoku.cols; j++)
        if(sudoku.getValue(i, j) !== 0)
          this.paintNumber(sudoku.getValue(i, j), i, j,sudoku.getSpot(i, j).default);
  }

  paintNumber(number, i, j, def = false){
    textSize(this.dimension);
    if(def)
      fill(255, 0, 0);
    else
      fill(0, 102, 153);
    text(number, j * this.dimension + 20,  ( i + 1) * this.dimension - 10);
  }

  paintBorderLines(row, col){
    fill(50);
    if( col % 3 === 0){
      if(row % 3 === 0)
        rect(row * this.dimension, col * this.dimension, 5, this.dimension);
      rect(row * this.dimension, col * this.dimension, this.dimension, 5);
    }
    else{
      if(row % 3 === 0)
        rect(row * this.dimension, col * this.dimension, 5, this.dimension);
    }
    if(col === 8)
      rect(row * this.dimension, (col + 1) * this.dimension, this.dimension, 5);
    if(row === 8)
      rect( (row + 1) * this.dimension, col * this.dimension, 5, this.dimension);
  }
}
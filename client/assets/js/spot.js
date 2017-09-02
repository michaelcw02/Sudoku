export class Spot {

  constructor(row, col, value = 0) {

    this.value = value; //The idea is when a spot has value 0 will be a empty square

    this.row = row; //Row position at the matrix
    this.col = col; //Column position at the matrix

    this.rowNeighbors = []; // Row neigbors
    this.colNeighbors = []; // Column neigbors
    this.subMatrixNeighbors = []; //The subsquare neighbors

    this.default = false; //Default is if is a value hardcoded before the start of solving

  }

  getAllNeighbors() {
    let neighbors = [];
    neighbors = neighbors.concat(this.rowNeighbors, this.colNeighbors, this.subMatrixNeighbors);
    return neighbors;
  }


  setNeighbors(sudoku, subMatrix) {
    this.setRowNeighbors(sudoku);
    this.setColNeighbors(sudoku);
    this.setSubMatrixNeighbors(subMatrix);
  }


  setRowNeighbors(sudoku) {
    range(sudoku.rows).forEach( (x, i) => {
      if (i <= 8 && i !== this.row) this.rowNeighbors.push(sudoku.getSpot(i, this.col))
    } );
  }

  setColNeighbors(sudoku) {
    range(sudoku.cols).forEach( (x, j) => {
      if (j <= 8 && j !== this.col) this.colNeighbors.push(sudoku.getSpot(this.row, j))
    } );
  }

  setSubMatrixNeighbors(subMatrix) {
    range(subMatrix.length).forEach( (x, i) => {
      if (subMatrix[i] !== this) this.subMatrixNeighbors.push(subMatrix[i])
    } )
  }

  isValidOption(value) {
    let neighbors = this.getAllNeighbors();
    return !neighbors.some((n) => n.value === value);
  }


}

/*module.exports = { //Remove this at working with p5
  Spot
}*/
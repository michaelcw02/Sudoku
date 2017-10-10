export class Spot {

    constructor(row, col, value = 0) {

        this.value = value; //The idea is when a spot has value 0 will be a empty square

        this.row = row; //Row position at the matrix
        this.col = col; //Column position at the matrix

        this.rowNeighbors = []; // Row neigbors
        this.colNeighbors = []; // Column neigbors
        this.subMatrixNeighbors = []; //The subsquare neighbors

        this.state = "possible";

        /* Three possible states:
           1- Default : The user can not change it
           2- Heuristic: The value was set by an algorithm(backtrack) or a technique(naked or hidden single) 
           3- Possible: The value was set by the user
        */

    }

    getAllNeighbors() {
        let neighbors = [];
        neighbors = neighbors.concat(this.rowNeighbors, this.colNeighbors, this.subMatrixNeighbors);
        return neighbors;
    }

    getPossibilities() {
        let possibilities = this.getAllNeighbors()
        possibilities = possibilities.map(x => x.value)
        return range(1, 10).filter(x => !possibilities.includes(x))
    }

    countPossibilities() {
        let poss = this.getPossibilities()
        return poss.length
    }


    setNeighbors(sudoku, subMatrix) {
        this.setRowNeighbors(sudoku);
        this.setColNeighbors(sudoku);
        this.setSubMatrixNeighbors(subMatrix);
    }


    setColNeighbors(sudoku) {
        range(sudoku.cols).forEach((x, i) => {
            if (i <= sudoku.cols - 1 && i !== this.row) this.colNeighbors.push(sudoku.getSpot(i, this.col))
        });
    }

    setRowNeighbors(sudoku) {
        range(sudoku.rows).forEach((x, j) => {
            if (j <= sudoku.rows - 1 && j !== this.col) this.rowNeighbors.push(sudoku.getSpot(this.row, j))
        });
    }

    setSubMatrixNeighbors(subMatrix) {
        range(subMatrix.length).forEach((x, i) => {
            if (subMatrix[i] !== this) this.subMatrixNeighbors.push(subMatrix[i])
        })
    }

    isValidOption(value) {
        let neighbors = this.getAllNeighbors();
        return !neighbors.some((n) => n.value === value);
    }

    setValueAndState(value = 0, state = "possible"){
        this.value = value
        this.state = state
    }

}

/* This class will help in some operations, to separate basic logic */

export class SudokuHelper {

    constructor() {
        this.subMatrix = []
    }

    /* Generates row, column and subMatrix neighbors for each spot */

    generateNeighbors(sudoku) {
        this.generateSubMatrix(sudoku)
        let grid = sudoku.grid
        grid.forEach(x => x.forEach(elem => elem.setNeighbors(sudoku, this.findInSubMatrix(elem))))
    }

    resetSudoku(sudoku, fun = z => z == "possible" || z == "heuristic") {
        sudoku.grid.forEach((row, i) => {
            row.forEach((spot, j) => {
                if (fun(sudoku.getSpot(i, j).state))
                    sudoku.setValueAndState(i, j, 0, "possible") //Sets to zero
            })
        })
    }


    gridToMatrix(grid) { //Grid of spots to a grid with only integers
        return grid.map(x => x.map(y => y.value))
    }

    nextEmpty(sudoku) { //Gives the coordinates of the next empty spot
        let grid = sudoku.grid
        return grid.reduce((z, x, i) =>
            x.reduce((acum, e, j) => !sudoku.getValue(i, j) ? { row: i, col: j } : acum, z), {})
    }

    findInSubMatrix(spot) {
        return this.subMatrix.find(elem => elem.indexOf(spot) > -1);
    }

    getSpotsWithOnePossibility(sudoku) {
        let grid = sudoku.grid;

        return grid.reduce((z, x) =>
                x.reduce((acum, e) => e.countPossibilities() == 1 ? acum.concat(e) : acum, z), [])
            .filter(x => x.value == 0)
    }

    generateSubMatrix(sudoku) {
        range(1, sudoku.rows, 3).forEach(row => {
            range(1, sudoku.cols, 3).forEach(col => {
                this.subMatrix.push(this.getSubMatrix(sudoku, row, col))
            })
        })
    }

    getSubMatrix(sudoku, i, j) {
        let subMatrix = [];
        subMatrix.push(sudoku.getSpot(i, j));
        subMatrix.push(sudoku.getSpot(i + 1, j));
        subMatrix.push(sudoku.getSpot(i - 1, j));
        subMatrix.push(sudoku.getSpot(i, j + 1));
        subMatrix.push(sudoku.getSpot(i, j - 1));
        subMatrix.push(sudoku.getSpot(i + 1, j + 1));
        subMatrix.push(sudoku.getSpot(i - 1, j - 1));
        subMatrix.push(sudoku.getSpot(i - 1, j + 1));
        subMatrix.push(sudoku.getSpot(i + 1, j - 1));
        return subMatrix;
    }

    validOption({ sudoku, row, col, value }) {
        let current = sudoku.getSpot(row, col)
        if (current)
            return current.isValidOption(value) ? "allowed" : this.handleException(current, value)
    }

    compareGrids(oldGrid, newGrid) {
        return oldGrid.reduce((z, x, i) =>
            x.reduce((acum, e, j) =>
                e != newGrid[i][j].value ? false : acum, z), true)
    }

    hasEmptyValues(sudoku) { //Auxiliar to see if sudoku has empty values
        return sudoku.grid.some(x => x.some(y => !y.value))
    }

    handleException(current, value) { //Returns if the row or column or subMatrix is blocking
        let cols = current.colNeighbors.some(x => x.value == value);
        let rows = current.rowNeighbors.some(x => x.value == value);
        let subm = current.subMatrixNeighbors.some(x => x.value == value);

        switch (cols || rows || subm) {
            case cols && rows && subm:
                return "allException";
            case rows && cols:
                return "rowColException";
            case cols && subm:
                return "colMatrixException";
            case rows && subm:
                return "rowMatrixException";
            case rows:
                return "rowException";
            case cols:
                return "columnException";
            case subm:
                return "subMatrixException";
            default:
                break;
        }
    }

    /* Counts how many spots have values different than zero */
    countValues(sudoku){
        let grid = sudoku.grid
        return grid.reduce( (z, x) => x.reduce( (acum, e) => e.value ? ++acum : acum, z),0)
    }

    resetNeighbors(sudoku){
        let grid = sudoku.grid
        grid.forEach( x => x.forEach( s => s.cleanNeighbors()))
    }
}
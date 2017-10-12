import { range } from './utils'

export class Painter { //This class wil be in charge of paint the sudoku every 60fps

    constructor(dimension, lib) {
        this.dimension = dimension
        this.lib = lib
    }

    paintSudoku(sudoku) {
        sudoku.grid.forEach((x, i) => x.forEach((y, j) => {
            this.lib.fill(255)
            this.lib.rect(i * this.dimension, j * this.dimension, this.dimension, this.dimension)
            this.paintBorderLines(i, j)
        }))
        this.paintNumbers(sudoku)
    }

    paintNumbers(sudoku) {
        range(sudoku.rows).forEach(i => {
            range(sudoku.cols).forEach(j => {
                if (sudoku.getValue(i, j) !== 0)
                    this.paintNumber(sudoku.getValue(i, j), i, j, sudoku.getSpot(i, j).state)
            })
        })
    }

    /* Paints the numbers in the sudoku (default = black, heuristic = green, possible = blue)*/
    paintNumber(number, i, j, state = "possible") {
        this.lib.textSize(this.dimension - 10)
        this.lib.textFont("Comfortaa")
        switch (state) {
            case "default":
                this.lib.fill(0);
                break;
            case "possible":
                this.lib.fill(0, 102, 153);
                break;
            case "heuristic":
                this.lib.fill(47, 155, 20);
                break;
        }
        this.lib.text(number, j * this.dimension + 20, (i + 1) * this.dimension - 10)
    }

    /* Paints the black border lines visible at the canvas */

    paintBorderLines(row, col) {
        this.lib.fill(50)
        if (col % 3 === 0) {
            if (row % 3 === 0)
                this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension)
            this.lib.rect(row * this.dimension, col * this.dimension, this.dimension, 5)
        } else {
            if (row % 3 === 0)
                this.lib.rect(row * this.dimension, col * this.dimension, 5, this.dimension)
        }
        if (col === 8)
            this.lib.rect(row * this.dimension, (col + 1) * this.dimension, this.dimension, 5)
        if (row === 8)
            this.lib.rect((row + 1) * this.dimension, col * this.dimension, 5, this.dimension)
    }
}
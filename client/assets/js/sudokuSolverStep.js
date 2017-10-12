/*
Authors:
	Andrey Arguedas Espinoza
	Daniela Armas Sánchez
	Michael Chen Wang
	Kimberly Olivas Delgado
*/

import { SudokuHelper } from './sudokuHelper';

/* This solver emulates the backtrack algorithm without using recursion, that's why it uses a stack
    the use of this technique was necessary to show every step in the solution process of the algorithm
*/

export class SudokuSolverStep {
    constructor() {
        this.sudokuHelper = new SudokuHelper() //Helps with some commons methods of a sudoku
        this.stack = [] //To manage recursion without using native recursion
        this.backtrack = false //A variable to record if last iteration required backtrack
    }

    solve(sudoku) {
        if (!this.sudokuHelper.hasEmptyValues(sudoku)) //If sudoku is solved the algorithm ends
            return true
        else {
            let curr = this.sudokuHelper.nextEmpty(sudoku) //Coordinates of next empty spot
            let currentSpot = sudoku.getSpot(curr.row, curr.col) //Empty spot
            let o = 1
            if (this.backtrack) {
                let back = this.stack.pop()
                o = back.value + 1
                currentSpot = back.last
                this.backtrack = false
            }
            for (; o <= 9; o++) { //Para cada posibilidad
                if (currentSpot.isValidOption(o)) { //Si es valida (No esta en la fila, columna o submatriz)
                    currentSpot.setValueAndState(o, "heuristic")
                    this.stack.push({ last: currentSpot, value: o })
                    return false
                }
            }
            let lastSpot = this.lastInStack().last
            sudoku.setValue(lastSpot.row, lastSpot.col) //Puts to zero
            this.backtrack = true //Backtrack needed
        }
    }

    lastInStack() {
        return this.stack[this.stack.length - 1]
    }

}
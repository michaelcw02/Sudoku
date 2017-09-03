export class SudokuGenerator {
    constructor(sudHelper) {
        this.sudokuHelper = sudHelper;
    }

    solve(sudoku) {
        if (!this.hasEmptyValues(sudoku)) //Si ya todos los spots tienen un numero es que esta solucionado
            return true;
        else {
            let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
            let currentSpot = sudoku.getSpot(curr.row, curr.col); //Nos traemos al objeto en esa posicion
            let options = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Array que contiene las opciones de cada spot
            while (options.length) { //Mientras exista alguna opción sin probar
                let o = options[Math.floor(Math.random() * options.length)]; //Elije aleatoriamente una opción del array
                if (currentSpot.isValidOption(o)) { //Si es valida (No esta en la fila, columna o submatriz)
                    sudoku.setValue(currentSpot.row, currentSpot.col, o); //Le metemos el valor      
                    if (this.solve(sudoku)) //Vuelva a ejecutar este algoritmo (Note que en la proxima llamada este spot ya no sera empty)
                        return true; //Si llega hasta aca es que lo soluciono
                }
                options = options.filter(x => x != o); //Elimina del array la opción ya que no fue válida
            }
            sudoku.setValue(currentSpot.row, currentSpot.col); //BACKTRACK Si llega aca es por que hubo backtrack, borra el current ya que la opcion escogida no era correcta
        }
        return false; //Este return permite romper la recursion, sino la pila se llenaria
    }

    //Pasar a funcional
    hasEmptyValues(sudoku) { //Auxiliar to see if sudoku is solved, this should be in sudoku helper
        for (let i = 0; i < sudoku.rows; i++)
            for (let j = 0; j < sudoku.cols; j++)
                if (sudoku.getValue(i, j) === 0)
                    return true;
        return false;
    }

    generate(sudoku) { //Este sudoku por parámetro ingresa vacío pero sale con sólo 17 spots de la solución
        //HACER FUNCIONAL
        let newSudoku = new Sudoku(9, 9); // Se crea un sudoku vacío
        sudokuHelper.generateNeighbors(newSudoku); // Se le asignan los vecinos
        this.solve(newSudoku); //Se resuelve el newSudoku por completo
        let i = 0;
        while (i < 17) { //Para que asigne sólo 17 casillas por default
            let row = Math.floor(Math.random() * 8);
            let col = Math.floor(Math.random() * 8);
            let value = newSudoku.getValue(row, col); //Se obtiene el valor de un spot aleatorio del newSudoku (resuelto)
            if (!sudoku.getValue(row, col)) { //Verifica que ese spot en el sudoku (parámetro) no tenga valor (o sea que sea igual a 0)
                sudoku.setSpot(row, col, value); // Asigna el valor en el spot del sudoku (parámetro)
                i++;
            }
        }
    }

}
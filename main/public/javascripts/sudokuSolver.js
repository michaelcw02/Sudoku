class SudokuSolver {
	constructor(){
		this.sudokuHelper = new SudokuHelper();
		this.painter = new Painter(60);
	}

	solve(sudoku){
		if( !this.hasEmptyValues(sudoku) ) //Si ya todos los spots tienen un numero es que esta solucionado
			return true;
		else {
				let curr = this.sudokuHelper.nextEmpty(sudoku); //Sacamos la fila y columna del primer spot vacio que encuentre
				let currentSpot = sudoku.getSpot(curr.row, curr.col);//Nos traemos al objeto en esa posicion

				for(let o = 1; o <= 9; o++){ //Para cada posibilidad
					if(currentSpot.isValidOption(o)){ //Si es valida (No esta en la fila, columna o submatriz)
						sudoku.setValue(currentSpot.row, currentSpot.col, o); //Le metemos el valor
						//this.painter.paintSudoku(sudoku); //Desearia que cada set de valor se viera, pero p5 no lo hace asi por que la funcion draw ya usa un for, y se stackearia horrible
						if(this.solve(sudoku)) //Vuelva a ejecutar este algoritmo (Note que en la proxima llamada este spot ya no sera empty)
							return true; //Si llega hasta aca es que lo soluciono
					}
				}
				sudoku.setValue(currentSpot.row, currentSpot.col); //BACKTRACK Si llega aca es por que hubo backtrack, borra el current ya que la opcion escogida no era correcta
			}
		return false; //Este return permite romper la recursion, sino la pila se llenaria
		
	}

	//Pasar a funcional
	hasEmptyValues(sudoku){ //Auxiliar to see if sudoku is solved, this should be in sudoku helper
		for(let i = 0; i < sudoku.rows; i++)
			for(let j = 0; j < sudoku.cols; j++)
				if(sudoku.getValue(i, j) === 0)
					return true;
		return false;
	}
}
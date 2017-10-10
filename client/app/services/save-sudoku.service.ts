import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SaveSudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Saver Service Up')
    }

    saveSudoku(user,sudoku) {
        console.log("Trying to save from save-sudoku.service.ts");
        let gridmin = this.minifyJsonGrid(sudoku.grid);
        let data = { name : user , grid : gridmin, level : sudoku.level};
        this.http.post(`api/sudoku`, data)
                .subscribe( 
                    res => console.log(res),
                    err => console.log(err)
                )
    }

    minifyJsonGrid(grid) {
        let obj = grid.map(x => x);
        let result = Array.from(new Array(9), (x, i) => {
            return Array.from(new Array(9), (x, j) => {
                return { value: obj[i][j].value, state: obj[i][j].state }
            })
        })
        return result;
    }

    storeSudoku(sudoku){
        let obj = this.minifyJsonGrid(sudoku.grid)
        localStorage.setItem("sudoku",JSON.stringify(obj)) 
    }
}
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Service is up')
    }

    //Saving
    saveSudoku(user, sudoku) {
        console.log("Trying to save from save-sudoku.service.ts");
        let gridmin = this.minifyJsonGrid(sudoku.grid);
        let data = { name : user , grid : gridmin, level : sudoku.level};
        this.http.post(`api/sudoku`, data)
                .subscribe( 
                    res => console.log(res),
                    err => console.log(err)
                )
    }

    //Loading
    getSudoku(level, callback) {
        this.http.get(`api/sudoku/level/${level}`)
            .subscribe(
                res => callback(undefined, res),
                err  => callback(err)
            )
    }

    getGames(userName, callback) {
        console.log("Estoy en loadSudokuService")
        this.http.get(`api/sudoku/games/${userName}`)
            .subscribe(
                res => callback(undefined, res),
                err  => callback(err)
            )
    }

    getSolution(sudoku, callback) {
        console.log('Estoy llamando el servidor para que me de una solucion')
        let minGrid = this.minifyJsonGrid(sudoku.grid);
        this.http.post('api/sudoku/solve/', {grid: minGrid})
            .subscribe(
                res => callback(undefined, res),
                err  => callback(err)
            )
    }

    minifyJsonGrid(grid) {
        let obj = grid.map(x => x);
        let result = Array.from(new Array(9), (x, i) =>
            Array.from(new Array(9), (x, j) => {
                return { value: obj[i][j].value, default: obj[i][j].default }
            })
        )
        return result;
    }

}

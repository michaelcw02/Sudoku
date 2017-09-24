import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoadSudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Loader Service Up')
    }

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
}

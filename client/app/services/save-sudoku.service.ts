import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SaveSudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Saver Service Up')
    }

    saveSudoku(sudoku) {
        return this.http.get(`/api/sudoku/${sudoku}`)
                .map( res => res.json() );
    }
}
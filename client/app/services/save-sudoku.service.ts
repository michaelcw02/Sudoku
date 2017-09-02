import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SaveSudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Saver Service Up')
    }

    saveSudoku(sudoku) {
        console.log("Trying to save");
        this.http.post(`api/sudoku`,sudoku)
                .subscribe( 
                    res => console.log(res),
                    err => console.log(err)
                )
    }
}
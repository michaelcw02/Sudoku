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
        let data = { name : user , grid : sudoku.grid, level : sudoku.level};
        this.http.post(`api/sudoku`, data)
                .subscribe( 
                    res => console.log(res),
                    err => console.log(err)
                )
    }
}
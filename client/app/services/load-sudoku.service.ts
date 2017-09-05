import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoadSudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Loader Service Up')
    }

    getSudoku(level) {
        return this.http.get(`/api/level/${level}`)
<<<<<<< HEAD:client/app/services/load-sudoku-json.service.ts
                .map( res => res.json() )
                .map( res => res);
=======
                .map( res => console.log(res) );
>>>>>>> 98358458abc5a42851648d37d4fcec8a3ef3c924:client/app/services/load-sudoku.service.ts
    }
}

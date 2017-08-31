import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoadSudokuJsonService {

    constructor(public http: Http) {
        console.log('Sudoku Loader Service Up')
    }

    getSudoku(level) {
        return this.http.get(`/api/level/${level}`)
                .map( res => res.json() );
        /*        
        return fetch(`/api/level/${level}`)
                .then( res => res.json() )
                .then( res => res );
                */
    }
}

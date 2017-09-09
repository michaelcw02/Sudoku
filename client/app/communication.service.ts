import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

  // Observable string sources
  private solveCallSource = new Subject<any>();
  private generateCallSource = new Subject<any>();
  private saveSudokuCallSource= new Subject<any>();
  
  // Observable string streams
  solve$ = this.solveCallSource.asObservable();
  generate$ = this.generateCallSource.asObservable();
  saveSudoku$ = this.saveSudokuCallSource.asObservable();

  // Service message commands
  callSolve() {
    this.solveCallSource.next();
  }

  callGenerate(){
    console.log("Generating");
    this.generateCallSource.next();
  }

  callSaveSudoku(userName){
    console.log("Llegue a comunication.service.ts");
    this.saveSudokuCallSource.next(userName);
  }

}

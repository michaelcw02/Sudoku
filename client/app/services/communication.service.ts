import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

  // Observable string sources
  private solveCallSource = new Subject<any>();
  private generateCallSource = new Subject<any>();
  private getDifficultyCallSource = new Subject<any>();
  private changeDifficultyCallSource = new Subject<any>();
  private saveSudokuCallSource= new Subject<any>();
  private loadGamesCallSource= new Subject<any>();
  private renderGameCallSource = new Subject<any>();

  // Observable string streams
  solve$ = this.solveCallSource.asObservable();
  generate$ = this.generateCallSource.asObservable();
  getDifficulty$ = this.getDifficultyCallSource.asObservable();
  changeDifficulty$ = this.changeDifficultyCallSource.asObservable();
  saveSudoku$ = this.saveSudokuCallSource.asObservable();
  loadGames$ = this.loadGamesCallSource.asObservable();
  renderGame$ = this.renderGameCallSource.asObservable();

  // Service message commands
  callSolve() {
    this.solveCallSource.next();
  }

  callGenerate(){
    this.generateCallSource.next();
  }

  callGetDifficulty() {
    this.getDifficultyCallSource.next();
  }

  callChangeDifficulty(difficulty) {
    this.changeDifficultyCallSource.next(difficulty);
  }

  callSaveSudoku(userName){
    this.saveSudokuCallSource.next(userName);
  }

  callLoadSudoku(userName){
    this.loadGamesCallSource.next(userName)
  }

  callRenderGame(grid){
    this.renderGameCallSource.next(grid);
  }

}

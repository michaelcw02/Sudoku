import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { BsDropdownModule }       from 'ngx-bootstrap/dropdown';
import { TooltipModule }          from 'ngx-bootstrap/tooltip';
import { ModalModule }            from 'ngx-bootstrap/modal';

import { AppComponent }           from './app.component';
import { SudokuComponent }        from './components/sudoku/sudoku.component';
import { OptionsComponent }       from './components/options/options.component';

import { LoadSudokuService }      from './services/load-sudoku.service';
import { SaveSudokuService }      from './services/save-sudoku.service';
import { CommunicationService }   from './services/communication.service';

import { SudokuService }          from './services/sudoku.service';

import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    OptionsComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    CommunicationService,
    SudokuService,
    SaveSudokuService,
    LoadSudokuService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


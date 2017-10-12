import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { BsDropdownModule }       from 'ngx-bootstrap/dropdown';
import { TooltipModule }          from 'ngx-bootstrap/tooltip';
import { ModalModule }            from 'ngx-bootstrap/modal';
import { LoadingModule, 
         ANIMATION_TYPES }        from 'ngx-loading';

import { AppComponent }           from './app.component';
import { SudokuComponent }        from './components/sudoku/sudoku.component';
import { OptionsComponent }       from './components/options/options.component';
import { TimerComponent }         from './components/timer/timer.component';

import { CommunicationService }   from './services/communication.service';
import { SudokuService }          from './services/sudoku.service';




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
    ModalModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      fullScreenBackdrop: true,
      backdropBorderRadius: '4px'
    })
  ],
  providers: [
    CommunicationService,
    SudokuService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


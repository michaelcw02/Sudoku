import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';
import { UserComponent }          from './components/user/user.component';
import { SudokuComponent }        from './components/sudoku/sudoku.component';

import { LoadSudokuJsonService }  from './services/load-sudoku-json.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    LoadSudokuJsonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

//Everything in the project will have to be imported into this file
/*  
    Declarations:
      Components
    Imports:
      Modules
        Form Modules 
        Http Modules
    Providers:
      Services
    Bootstrap:
      Only root component
*/

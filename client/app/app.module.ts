import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';
import { UserComponent }          from './components/user/user.component';
import { SudokuComponent }        from './components/sudoku/sudoku.component';

import { LoadSudokuJsonService }  from './services/load-sudoku-json.service';
import { OptionsComponent } from './components/options/options.component';
import { CommunicationService } from './communication.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SudokuComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    LoadSudokuJsonService,
    CommunicationService
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

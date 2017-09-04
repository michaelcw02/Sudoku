import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent }           from './app.component';
import { UserComponent }          from './components/user/user.component';
import { SudokuComponent }        from './components/sudoku/sudoku.component';

import { LoadSudokuJsonService }  from './services/load-sudoku-json.service';

import { OptionsComponent } from './components/options/options.component';
import { CommunicationService } from './communication.service';
import { SaveSudokuService }  from './services/save-sudoku.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SudokuComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    LoadSudokuJsonService,
    SaveSudokuService,
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

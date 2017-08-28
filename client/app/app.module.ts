import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
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

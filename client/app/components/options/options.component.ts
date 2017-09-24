import { Component, OnInit, TemplateRef } from '@angular/core';

import { LoadSudokuService }  from '../../services/load-sudoku.service';
import { CommunicationService } from '../../services/communication.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import * as $                     from 'jquery'


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, 
              private communicationService: CommunicationService,
              private loadSudokuService: LoadSudokuService) {

    this.communicationService.getDifficulty$.subscribe( () => this.getDifficulty() )
    this.communicationService.loadGames$.subscribe( () => this.loadGames() )
  
  }

  ngOnInit() {
  }

  solve() {
    this.communicationService.callSolve();
  }

  generate() {
    this.communicationService.callGenerate();
  }

  changeDifficulty() {
    let difficulty = $('#difficulty option:selected').val()
    this.communicationService.callChangeDifficulty(difficulty);
    this.modalRef.hide()
  }
  
  getDifficulty() {
    return $('#difficulty option:selected').val()
  }

  saveSudoku(){
    let userName = $('#username').val()
    this.communicationService.callSaveSudoku(userName);
    this.modalRef.hide()
  }

  loadGames(){
    let userName = $('#loadUserName').val()
    this.loadSudokuService.getGames(userName, (err, data) => {
      this.renderGames(JSON.parse(data._body).matches);
    })

  }

  renderGames(data){
      data.forEach( x => $('#games').append($('<div class="loadMatchPanel">'+
                         "<p class='info'> ID of your saved game: " + x._id + " </p>" +
                         "<p class='info'> Date when you saved the game: " + x.date + " </p>" +
                         "</div>").click( () => this.renderSavedGame(x.grid))
      ))
  }

  renderSavedGame(grid){
    console.log("Estoy listo para renderear el grid, me llego", grid)
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

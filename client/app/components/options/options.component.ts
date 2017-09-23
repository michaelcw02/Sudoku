import { Component, OnInit, TemplateRef } from '@angular/core';

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

  constructor(private modalService: BsModalService, private communicationService: CommunicationService) { 
    this.communicationService.getDifficulty$.subscribe( () => this.getDifficulty() )
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
    console.log("Estoy en options components")
    let userName = $('#username').val()
    this.communicationService.callSaveSudoku(userName);
    this.modalRef.hide()
  }

  loadGames(){
    let userName = $('#loadUserName').val()
    console.log("Estoy en optinos component ts con user", userName)
    let data = this.communicationService.callLoadSudoku(userName)
    console.log("Estoy en optinos component ts", data)
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

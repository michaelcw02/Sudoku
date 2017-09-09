import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommunicationService } from '../../communication.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import * as $ from 'jquery'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private communicationService: CommunicationService) { 
    //this.communicationService.saveSudoku$.subscribe( () => this.saveSudoku());
  }

  ngOnInit() {
  }

  solve = function () {
    this.communicationService.callSolve();
  }

  generate = function() {
    this.communicationService.callGenerate();
  }

  saveSudoku(){
    console.log("Llamando a save sudoku desde options.component.ts");
    let userName = $('#username').val()
    this.communicationService.callSaveSudoku(userName);
    this.modalRef.hide()
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

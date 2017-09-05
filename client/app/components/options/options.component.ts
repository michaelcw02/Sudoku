import { Component, OnInit } from '@angular/core';

import { CommunicationService } from '../../services/communication.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  solve = function () {
    this.communicationService.callSolve();
  }

  generate = function() {
    this.communicationService.callGenerate();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

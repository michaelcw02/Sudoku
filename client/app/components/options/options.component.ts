import { Component, OnInit } from '@angular/core';

import { CommunicationService } from '../../services/communication.service'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  solve = function () {
    this.communicationService.callSolve();
  }

  generate = function() {
    this.communicationService.callGenerate();
  }

}

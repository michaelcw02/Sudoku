import { Component } from '@angular/core';

import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public loading = false;
  constructor(private communicationService: CommunicationService) {

    this.communicationService.setLoading$.subscribe(mode => this.loading = mode)
    
  }

  

}


//This is like the main
//This is where all decorators are
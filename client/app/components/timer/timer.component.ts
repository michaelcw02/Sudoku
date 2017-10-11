import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  worker: Worker

  minutes: number = -1;
  seconds: number = -1;

  constructor() {
    this.worker = null;
  }

  ngOnInit() {
    this.startTimer();
  }

  startTimer(){
     if (typeof(Worker)!=="undefined"){
        if (this.worker==null){
           this.worker = new Worker("../../assets/js/timer.js");
        }
        this.worker.onmessage = (e) => {
          this.minutes = e.data.minutes;
          this.seconds = e.data.seconds;
        }
     }
     else{
       $("#timer").text("Browser does not support Web Workers");
     }
  }

  stopTimer(){
    this.worker.terminate();
    this.worker = null;
  }

  restartTimer(){
    this.worker.terminate();
    this.worker = null;
    this.minutes = 0;
    this.seconds = 0;
  }

}

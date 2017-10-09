import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {WorkerAppModule} from '@angular/platform-webworker';
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  
  worker: Worker

  constructor() {
    this.worker = null;
  }

  ngOnInit() {
    $("#timer").text("00:00");
  }

  startTimer(){
     if (typeof(Worker)!=="undefined"){
        if (this.worker==null){
           this.worker = new Worker("../../assets/js/timer.js");
        }
        this.worker.onmessage = (e) => $("timer").text(e.data);
     }
     else{
       $("timer").text("Browser does not support Web Workers");
     }
  }

  stopTimer(){
    this.worker.terminate();
  }

  restartTimer(){
    this.worker.terminate();
    this.worker = null;
  }

}

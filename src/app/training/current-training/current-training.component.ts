import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter();

  progress= 0;
  timer: any;

  constructor(private dialog: MatDialog, private trainingSer: TrainingService) { }

  ngOnInit() {

   this.startOrResumeTimer();
  }

  startOrResumeTimer(){

    const step = this.trainingSer.getRunningExercise().duration/100 * 1000;

  this.timer = setInterval(()=> {

    this.progress = this.progress +1;

    if( this.progress >= 100) {
      this.trainingSer.onCompletedExercise();
      clearInterval(this.timer);
    }

  }, step );
} 
  

  onStop() {
    clearInterval(this.timer);
   var dialogRef = this.dialog.open(StopTrainingComponent,{
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result)
      this.trainingSer.onCancelledExercise(this.progress);
      else 
      this.startOrResumeTimer();
      
    })

  }

}

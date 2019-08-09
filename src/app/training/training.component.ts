import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  
  currentWorkout: Subscription;
  onGoingTraining = false;
  constructor(private trainingSer: TrainingService) { }

  ngOnInit() {
    this.currentWorkout= this.trainingSer.ExerciseChanged.subscribe(result => {
      if(result) {
        this.onGoingTraining = true;
      }
       else {
        this.onGoingTraining = false;

       }
    })

  }

  ngOnDestroy(){
    this.currentWorkout.unsubscribe();
  }
}

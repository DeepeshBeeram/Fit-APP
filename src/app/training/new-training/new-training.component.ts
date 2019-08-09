import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { TrainingModel } from '../taining.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {


  exercises: TrainingModel[];

  constructor(private trainingServ: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingServ.getAvailableServices();
    
  }

  onStartTraining(form:NgForm) {

    this.trainingServ.getCurrentExercise(form.value.exercise);



  }
}

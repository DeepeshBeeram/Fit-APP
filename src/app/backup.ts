// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';

// import { Exercise } from './exercise.model';

// export class TrainingService {
//   exerciseChanged = new Subject<Exercise>();
//   private availableExercises: Exercise[] = [
//     { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
//     { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
//     { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
//     { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
//   ];
//   private runningExercise: Exercise;
//   private exercises: Exercise[] = [];

//   getAvailableExercises() {
//     return this.availableExercises.slice();
//   }

//   startExercise(selectedId: string) {
//     this.runningExercise = this.availableExercises.find(
//       ex => ex.id === selectedId
//     );
//     this.exerciseChanged.next({ ...this.runningExercise });
//   }

//   completeExercise() {
//     this.exercises.push({
//       ...this.runningExercise,
//       date: new Date(),
//       state: 'completed'
//     });
//     this.runningExercise = null;
//     this.exerciseChanged.next(null);
//   }

//   cancelExercise(progress: number) {
//     this.exercises.push({
//       ...this.runningExercise,
//       duration: this.runningExercise.duration * (progress / 100),
//       calories: this.runningExercise.duration * (progress / 100),
//       date: new Date(),
//       state: 'cancelled'
//     });
//     this.runningExercise = null;
//     this.exerciseChanged.next(null);
//   }

//   getRunningExercise() {
//     return { ...this.runningExercise };
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';

// import { StopTrainingComponent } from './stop-training.component';
// import { TrainingService } from '../training.service';

// @Component({
//   selector: 'app-current-training',
//   templateUrl: './current-training.component.html',
//   styleUrls: ['./current-training.component.css']
// })
// export class CurrentTrainingComponent implements OnInit {
//   progress = 0;
//   timer: number;

//   constructor(private dialog: MatDialog, private trainingService: TrainingService) {}

//   ngOnInit() {
//     this.startOrResumeTimer();
//   }

//   startOrResumeTimer() {
//     const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
//     this.timer = setInterval(() => {
//       this.progress = this.progress + 1;
//       if (this.progress >= 100) {
//         this.trainingService.completeExercise();
//         clearInterval(this.timer);
//       }
//     }, step);
//   }

//   onStop() {
//     clearInterval(this.timer);
//     const dialogRef = this.dialog.open(StopTrainingComponent, {
//       data: {
//         progress: this.progress
//       }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.trainingService.cancelExercise(this.progress);
//       } else {
//         this.startOrResumeTimer();
//       }
//     });
//   }
// }

import { TrainingModel } from './taining.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class TrainingService {

    ExerciseChanged = new Subject<TrainingModel>();

    availableExercises: TrainingModel[] = [
        { id: 'crunches', name: 'crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'toes', duration: 180, calories: 10 },
        { id: 'burpees', name: 'burpees', duration: 60, calories: 5 },
        { id: 'side-lunges', name: 'side-lunges', duration: 30, calories: 8 },
    ];

    runningExercise: TrainingModel;

    completeExercises: TrainingModel[] = [];

    getAvailableServices() {
        return this.availableExercises.slice();
    }

    getCurrentExercise(selectid: string) {
        this.runningExercise = this.availableExercises.find(x => x.id === selectid);

        this.ExerciseChanged.next({ ...this.runningExercise });

    }

    onCompletedExercise() {

        this.completeExercises.push({
            ...this.runningExercise,
            date: new Date(),
            state: "completed"
        }
        );
        this.runningExercise = null;
        this.ExerciseChanged.next(null);

    }

    onCancelledExercise(progress: number) {

        this.completeExercises.push({
            ...this.runningExercise,
            date: new Date(),
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
            state: "cancelled"
        }
        );
        this.runningExercise = null;
        this.ExerciseChanged.next(null);

    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

completeOrCancelledExercises() {
    return this.completeExercises.slice();
}


}
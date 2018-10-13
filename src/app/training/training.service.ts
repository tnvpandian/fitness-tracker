import { Exercise } from "./exercise.model";
import { Subject } from 'rxjs';
import { nullSafeIsEquivalent } from "@angular/compiler/src/output/output_ast";
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    private runningExercise: Exercise;
    private completedExercises: Exercise[] = [];
    constructor() {

    }
    getExerciseList() {
        return this.availableExercises.slice();
    }
    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next(this.runningExercise);
        console.log('Training Service: startExercise => '+selectedId);
    }
    completeExercise() {
        this.completedExercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(this.runningExercise);
        console.log('Training Service: completeExercise => '+this.runningExercise);

    }

    cancelExercise(progress: number) {
        this.completedExercises.push({
            ...this.runningExercise,
            date: new Date(),
            state: 'cancelled',
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100)
        });
        this.runningExercise = null;
        this.exerciseChanged.next(this.runningExercise);
        console.log('Training Service: cancelExercise => '+this.runningExercise);
    }

    stopCurrentExercise() {
        this.exerciseChanged.next(null);
        console.log('Training Service: stopCurrentExercise => '+this.runningExercise);
    }
    getRunningExercise() {
        return { ...this.runningExercise };
    }

    getCompletedOrCancelledTrainings() {
        return this.completedExercises.slice();
    }

}
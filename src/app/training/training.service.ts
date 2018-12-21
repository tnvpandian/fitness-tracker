import { Exercise } from "./exercise.model";
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { UIService } from "../shared/ui.service.";
import { stringToKeyValue } from "@angular/flex-layout/extended/typings/style/style-transforms";

@Injectable()
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();

    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;
    private completedExercises: Exercise[] = [];
    private fbSubscriptions: Subscription[] = [];

    constructor(private db: AngularFirestore, private uiService: UIService) {
    }
    fetchExerciseList() {
        this.fbSubscriptions.push(this.db.collection<Exercise>('availableExercises').snapshotChanges().pipe(
            map(docArray => {
                console.log('availableExercises',docArray);
                return docArray.map( doc => {
                    return {
                        id: doc.payload.doc.id,
                        name: doc.payload.doc.data().name,
                        duration: doc.payload.doc.data().duration,
                        calories: doc.payload.doc.data().calories
                    }
                } )
            })
        ).subscribe((exercises: Exercise[]) => {
            this.availableExercises = exercises;
            this.exercisesChanged.next([...this.availableExercises]);
        }, (error) => {
            // this.uiService.loadingStateChanged
            this.uiService.showSnackBar('Fetching Exrecises Failed, Please try again later', null, 3000);
        }));
    }
    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
        this.exerciseChanged.next(this.runningExercise);
        console.log('Training Service: startExercise => ' + selectedId);
    }
    completeExercise() {
        this.addDataToDataBase({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(this.runningExercise);
        console.log('Training Service: completeExercise => ' + this.runningExercise);

    }

    cancelExercise(progress: number) {
        this.addDataToDataBase({
            ...this.runningExercise,
            date: new Date(),
            state: 'cancelled',
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100)
        });
        this.runningExercise = null;
        this.exerciseChanged.next(this.runningExercise);
        console.log('Training Service: cancelExercise => ' + this.runningExercise);
    }

    stopCurrentExercise() {
        this.exerciseChanged.next(null);
        console.log('Training Service: stopCurrentExercise => ' + this.runningExercise);
    }
    getRunningExercise() {
        return { ...this.runningExercise };
    }

    fetchCompletedOrCancelledTrainings() {
        this.fbSubscriptions.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
            this.finishedExercisesChanged.next(exercises);
        }));
    }

    cancelFireBaseSubscriptions() {
        this.fbSubscriptions.forEach(subs => subs.unsubscribe());
    }

    addDataToDataBase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service.';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  newTrainingForm = new FormGroup({
    selectedTraining: new FormControl('', [Validators.required])
  });
  trainigList: Exercise[];
  exercisesSubscription: Subscription;
  isLoading: boolean = true;
  constructor(private trainingService: TrainingService, private snackbar: MatSnackBar) { 
  }

  ngOnInit() {
    // this.trainigList = this.trainingService.getExerciseList();
    console.log(this.trainigList);
    this.trainingService.fetchExerciseList();
    this.exercisesSubscription = this.trainingService.exercisesChanged.subscribe( (exercises: Exercise[] )=> {
      this.trainigList = exercises;
      this.isLoading = false;
    }, (error) => {
      console.log('Error', error);
      this.snackbar.open( 'Unable to fetch Trainings', null, { duration: 3000 } );
    } );
    // .pipe(
    //   tap(resultArray => {
    //     for (let doc of resultArray) {
    //       console.log(doc);
    //     }
    //   }
    //   )
    // )
    }

  onStartTraining() {
    console.log(this.newTrainingForm.value.selectedTraining);
    this.trainingService.startExercise(this.newTrainingForm.value.selectedTraining);
  }

ngOnDestroy() {
  if( this.exercisesSubscription ){
    this.exercisesSubscription.unsubscribe();
  }
}

}

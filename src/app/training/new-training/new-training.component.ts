import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  newTrainingForm = new FormGroup({
    selectedTraining: new FormControl('',[Validators.required])
  });
  trainigList: Exercise[] = [];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainigList = this.trainingService.getExerciseList();
    console.log(this.trainigList);
  }

  onStartTraining() {
    console.log(this.newTrainingForm.value.selectedTraining);
    this.trainingService.startExercise(this.newTrainingForm.value.selectedTraining);
  }

}

import { Component, OnInit } from '@angular/core';
import { StopTrainingComponent } from './stop-trainning.component'
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress:number = 0;
  timer = null;
  currentExercise: Exercise;
  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTraining();
    this.currentExercise = this.trainingService.getRunningExercise();
  }

  startOrResumeTraining() {
    const step = this.trainingService.getRunningExercise().duration / 100 *1000;
    this.timer = setInterval(() => {
      console.log('CurrentTrainingComponent : startOrResumeTraining :  currentExercise:'+ this.currentExercise.id +' this.progress:' + this.progress);
      this.progress += 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
        this.progress = 0;
     }
    }, step);

  }

  onStop() {
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result === true) {
        clearInterval(this.timer);
        this.trainingService.cancelExercise(this.progress);
        this.progress = 0;
      } else {
        // this.startOrResumeTraining();
      }
    });
  }

}

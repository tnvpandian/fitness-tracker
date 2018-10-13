import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource } from '@angular/material';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {
  
  displayedColumns:string [] = [];
  exercises = new MatTableDataSource<Exercise>();

  constructor(private trainingService: TrainingService) {
    
   }

  ngOnInit() {
    this.displayedColumns = ['date','name','duration','calories','state'];
    this.exercises.data = this.trainingService.getCompletedOrCancelledTrainings();
  }

}

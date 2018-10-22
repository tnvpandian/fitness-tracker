import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  
  displayedColumns:string [] = [];
  exercises = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) tableSort : MatSort;

  constructor(private trainingService: TrainingService) {
    
   }

  ngOnInit() {
    this.displayedColumns = ['date','name','duration','calories','state'];
    this.exercises.data = this.trainingService.getCompletedOrCancelledTrainings();
 
  }
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.exercises.sort = this.tableSort;
}

doFilter(filterValue: string) {
this.exercises.filter = filterValue.trim().toLowerCase();
}

}

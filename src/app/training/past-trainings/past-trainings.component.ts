import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Exercise } from '../exercise.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, OnDestroy, AfterViewInit {
  
  displayedColumns:string [] = [];
  exercises = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) tableSort : MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private finishedExerciseSubscription: Subscription;
  constructor(private trainingService: TrainingService) {
    
   }

  ngOnInit() {
    this.displayedColumns = ['date','name','duration','calories','state'];
    this.trainingService.fetchCompletedOrCancelledTrainings();
    this.finishedExerciseSubscription = this.trainingService.finishedExercisesChanged.subscribe( (exercises: Exercise[]) => {
      this.exercises.data = exercises;
    } );
 
  }
  ngOnDestroy() {
    if( this.finishedExerciseSubscription ) {
      this.finishedExerciseSubscription.unsubscribe();
    }
  }
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.exercises.sort = this.tableSort;
  this.exercises.paginator = this.paginator;
}

doFilter(filterValue: string) {
this.exercises.filter = filterValue.trim().toLowerCase();
}

}

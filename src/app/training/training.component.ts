import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  exerciseChangedSubscription: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciseChangedSubscription = this.trainingService.exerciseChanged.subscribe((currentExcerside) => {
      if (currentExcerside) {
        this.ongoingTraining = true;
      }
      else {
        this.ongoingTraining = false;
      }
    });
  }

  addToCurrentTraining() {
    this.ongoingTraining = true;
  }

  ngOnDestroy() {
    this.exerciseChangedSubscription.unsubscribe();
  }

}

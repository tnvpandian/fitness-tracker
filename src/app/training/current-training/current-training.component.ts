import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StopTrainingComponent } from './stop-trainning.component'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer = null;
  @Output() trainingExit = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeTraining();
  }

  startOrResumeTraining() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);

  }

  onStop() {
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result === true) {
        clearInterval(this.timer);
        this.trainingExit.emit();
      } else {
        this.startOrResumeTraining();
      }
    });
  }

}

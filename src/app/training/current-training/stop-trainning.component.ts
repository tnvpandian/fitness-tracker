import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>Are you sure to stop the training? You already got {{ progress }} </mat-dialog-content>
    <mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">Yes</button>
    <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
    `
})
export class StopTrainingComponent implements OnInit  {
progress = null;
constructor( @Inject(MAT_DIALOG_DATA) public dataPassed:any) {

}

ngOnInit() {
    this.progress = this.dataPassed.progress;
}

}
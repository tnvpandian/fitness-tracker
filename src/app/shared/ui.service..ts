import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class UIService {
    constructor( private snackBar: MatSnackBar ) {

    }
    loadingStateChanged = new Subject<boolean>();

    showSnackBar( message, action, msgDuration ){
       this.snackBar.open( message, action, { duration: msgDuration } );
    }
}
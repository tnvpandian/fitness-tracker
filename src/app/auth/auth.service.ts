import { User } from "./signup/user.model";
import { AuthData } from "./signup/auth-data.model";
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { TrainingService } from "../training/training.service";
import { MatSnackBar } from "@angular/material";
import { UIService } from "../shared/ui.service.";

@Injectable()
export class AuthService {
    private user: User;
    private isAuthenticated = false;
    authChange = new Subject<boolean>();

    constructor(private router: Router, private afAuth: AngularFireAuth, private trainingService: TrainingService, private snackBar: MatSnackBar, private uiService: UIService) {

    }

    initAuthListener() {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/trainings']);
            } else {
                this.trainingService.cancelFireBaseSubscriptions();
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
        }
        );
    }

    registerUser(authData: AuthData) {
        console.log(authData);
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(authData.email, authData.password).then(result => {
            console.log(result);
            this.uiService.loadingStateChanged.next(false);
        }).catch(error => {
            console.log(error);
            this.uiService.showSnackBar(error.message, null, 3000);
            this.uiService.loadingStateChanged.next(false);
        });
    }

    login(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(authData.email, authData.password).then(result => {
            console.log(result);
            this.uiService.loadingStateChanged.next(false);
        }
        ).catch(error => {
            console.log(error);
            this.uiService.showSnackBar(error.message, null, 3000);
            this.uiService.loadingStateChanged.next(false);         
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }
    isAuth() {
        return this.isAuthenticated;
    }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service.';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup = new FormGroup(
    {
      userName: new FormControl('', [Validators.email, Validators.required]),
      passWord: new FormControl('', [Validators.minLength(6)]),
      userDob: new FormControl('', [Validators.required]),
      termsChecked: new FormControl('', [Validators.requiredTrue])
    }
  );
  constructor(private authService: AuthService, private uiService: UIService) { }
  isLoading : boolean = false;
  loadingSubs: Subscription;
  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe( isLoading => {
      this.isLoading = isLoading;
    } );
  }

  processForm() {
    console.log(' Inside Submit!!! ', this.signUpForm.value.userName);
    this.authService.registerUser({
      email: this.signUpForm.value.userName,
      password: this.signUpForm.value.passWord
    });
  }
  getMaxDOB() {
    let currentYear = (new Date()).getFullYear() - 18;
    let maxAllowedDob = new Date();
    return new Date(currentYear, maxAllowedDob.getMonth(), maxAllowedDob.getDate());
  }

  ngOnDestroy(){
    if(this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}

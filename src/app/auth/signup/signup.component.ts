import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup = new FormGroup(
   { userName: new FormControl('', [Validators.email, Validators.required]) ,
    passWord: new FormControl('', [Validators.minLength(6)]) ,
    userDob: new FormControl('', [Validators.required]),
    termsChecked: new FormControl('', [Validators.requiredTrue] )
  }
  );
  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  processForm() {
    console.log(' Inside Submit!!! ', this.signUpForm );
    this.authService.registerUser({
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
  });
}
  getMaxDOB() {
    let currentYear = (new Date ()).getFullYear() - 18;
    let maxAllowedDob= new Date ();
    return new Date( currentYear, maxAllowedDob.getMonth(), maxAllowedDob.getDate());
  }
}

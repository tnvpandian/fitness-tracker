import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  processForm() {
    console.log(' Inside Submit!!! ', this.signUpForm );
  }
  getMaxDOB() {
    let currentYear = (new Date ()).getFullYear() - 18;
    let maxAllowedDob= new Date ();
    return new Date( currentYear, maxAllowedDob.getMonth(), maxAllowedDob.getDate());
  }
}

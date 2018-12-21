import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup = new FormGroup({
    userid: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private uiService: UIService) { }
  isLoading : boolean = false;
  loadingSubs: Subscription;
  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe( isLoading => {
      this.isLoading = isLoading;
    } );
  }

  processSigninForm() {
    console.log(this.loginForm);
    this.authService.login({
      email: this.loginForm.value.userid,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy(){
    if(this.loadingSubs ){
      this.loadingSubs.unsubscribe();
    }
  }

}

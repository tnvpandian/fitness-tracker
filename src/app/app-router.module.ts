import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path:'', component: WelcomeComponent, pathMatch: 'full' },
    { path:'signup', component: SignupComponent  },
    { path:'login', component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot( routes )],
    exports: [ RouterModule  ]
})
export class AppRoutingModule {

}
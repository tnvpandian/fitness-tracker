import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "angularfire2/auth";
import { SharedModule } from "../shared/shared.module";
import { AuthRouterModule } from "./auth.router.module";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        FormsModule,
        AngularFireAuthModule,
        SharedModule,
        AuthRouterModule
    ],
    exports: [
    ]
})
export class AuthModule {

}
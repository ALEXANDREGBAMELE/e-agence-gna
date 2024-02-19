import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line}
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PasswordForgetComponent } from './components/password-forget/password-forget.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    LoginComponent,
    PasswordForgetComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    ReactiveFormsModule ,
    SharedModule,
    NgOtpInputModule,
  ]
})
export class AuthentificationModule { }

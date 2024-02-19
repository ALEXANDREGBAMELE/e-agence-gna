import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigateService } from 'src/app/core/services/navigate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  showPassword: boolean = false;
  
  constructor(private fb: FormBuilder, private navigateService: NavigateService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

submitForm() {
  console.log('Form submitted', this.loginForm.value);
  this.login();
}
login(){
  this.navigateService.goToDashboard();
}


togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  //this.password = typeof(this.password) ? 'text' : 'password';
}



}

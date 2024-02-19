import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrl: './password-forget.component.css'
})
export class PasswordForgetComponent implements OnInit{
  loginForm!: FormGroup;
  showPassword: boolean = false;
  loading: boolean = true;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

submitForm() {
  console.log('Form submitted', this.loginForm.value);
}

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  //this.password = typeof(this.password) ? 'text' : 'password';
}

step: number = 1;
currentStep: boolean = false;

next(){
  if(this.step<3){
        this.step++
        this.currentStep = true;
  }
}

previous(){
  if(this.step>1){
        this.step--
  }
}
onOtpChange(otp: string) {
  console.log(otp);
}
}

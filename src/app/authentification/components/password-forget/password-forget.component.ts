import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigateService } from 'src/app/core/services/navigate.service';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrl: './password-forget.component.css'
})
export class PasswordForgetComponent implements OnInit{

  loginForm!: FormGroup;
  showPassword: boolean = false;
  loading: boolean = true;
  
  constructor(private fb: FormBuilder, private navigateService: NavigateService) {}
  ngOnInit(): void {
    this.step = 1;

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

next(){
  if(this.step<3){
        this.step++
  }
}

previous(){
  if(this.step>1){
        this.step--
  }
}
//gestion de l'otp
onOtpChange(otp: string) {
  console.log(otp);
}
//Navigation vers la page de succès
goToSuccessPasswordUpdate() {
  this.navigateService.goToSuccessPasswordUpdate();
}

handleButtonClick() {
  alert('Button clicked');
  }
  
}

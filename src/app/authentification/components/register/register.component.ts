import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigateService } from 'src/app/core/services/navigate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
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
  this.register();
}

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  //this.password = typeof(this.password) ? 'text' : 'password';
}

register(){
  this.navigateService.goToDashboard();
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

}

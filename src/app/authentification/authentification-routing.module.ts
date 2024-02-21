import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PasswordForgetComponent } from './components/password-forget/password-forget.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordUpdateSuccessfulyComponent } from './components/password-forget/password-update-successfuly/password-update-successfuly.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  
  {
    path: 'forget',
    component: PasswordForgetComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'success-password-update',
    component: PasswordUpdateSuccessfulyComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }

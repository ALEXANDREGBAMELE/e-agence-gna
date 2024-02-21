import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  

  constructor( private route: Router ) { }

  public goToIndex() {
    this.route.navigate(['index']);
  }
  public goToDashboard() {
    this.route.navigate(['index/dashboard']);
  }

  public goToSuccessPasswordUpdate() {
    this.route.navigate(['auth/success-password-update']);
  }

  public goToLogin() {
    this.route.navigate(['auth/login']);
  }
}

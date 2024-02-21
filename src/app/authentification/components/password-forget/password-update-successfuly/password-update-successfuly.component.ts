import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate.service';

@Component({
  selector: 'app-password-update-successfuly',

  templateUrl: './password-update-successfuly.component.html',
  styleUrl: './password-update-successfuly.component.css'
})
export class PasswordUpdateSuccessfulyComponent implements OnInit{
$loading: boolean = true;

constructor(private navigateService: NavigateService) { } // loding

ngOnInit(): void {
  setTimeout(() => {
    this.$loading = false; // Après deux secondes, changer la valeur de la variable à false
  }, 2000); // 2000 millisecondes = 2 secondes
}
goToLogin() {
  this.navigateService.goToLogin();
}
}

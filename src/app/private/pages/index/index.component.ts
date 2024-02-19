import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
constructor( private navigateService: NavigateService ) { }
// loding
loading: boolean = true;

ngOnInit(): void {
  setTimeout(() => {
    this.loading = false; // Après deux secondes, changer la valeur de la variable à false
  }, 2000); // 2000 millisecondes = 2 secondes
}


// navigate to dashboard
  navigateToDashbord() {
    this.navigateService.goToDashboard();
  }

}

import { Component } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  constructor( private navigateService: NavigateService ) { 

  }
  
    navigateToDashbord() {
      this.navigateService.goToDashboard();
    }
}

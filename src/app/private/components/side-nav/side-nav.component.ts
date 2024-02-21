import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate.service';
import { NavbarService } from '../../services/navbar.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  isVisible = false;

  navbarItems = [
    {
      id:1,
      name:"Tableau de bord",
      icon:"../../../../assets/icons/Groupe 11.svg",
      url:"/index/dashboard",
      action:""
    },
    {
      id:2,
      name:"Mes offres personnalisés",
      icon:"",
      url:"",
      action:""
    }
  ];

  constructor( private navigateService: NavigateService, private navbarService: NavbarService ) { 

  }
  
    navigateToDashbord() {
      this.navigateService.goToDashboard();
    }

    ngOnInit(): void {
      this.navbarService.isVisible$.subscribe((isVisible) => {
        this.isVisible = !isVisible;
      });

      initFlowbite();
    }
}

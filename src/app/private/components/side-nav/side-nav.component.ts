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
      label:"Tableau de bord",
      icon:"../../../../assets/icons/Groupe 11.svg",
      url:"/index/dashboard",
      action:""
    },
    {
      id:2,
      label:"Mes offres personnalisés",
      icon:"../../../../assets/icons/Groupe 12078-1.svg",
      url:"/index/offres",
      action:""
    },
    {
      id:3,
      label:"Mes simulations",
      icon:"../../../../assets/icons/3d-cube.svg",
      url:"/index/simulations",
      action:""
    },
    {
      id:4,
      label:"Mes contrats",
      icon:"../../../../assets/icons/file-5.svg",
      url:"/index/contrats",
      action:""
    },
    {
      id:5,
      label:"Mes sinistres",
      icon:"../../../../assets/icons/Layer_x0020_1.svg",
      url:"/index/sinistres",
      action:""
    },
    {
      id:6,
      label:"Mon programme de fidélité",
      icon:"../../../../assets/icons/Groupe 12078-1.svg",
      url:"/index/programme-fidelite",
      action:""
    },
    {
      id:7,
      label:"Mes partenaires",
      icon:"../../../../assets/icons/users.svg",
      url:"/index/partenaires",
      action:""
    },
    {
      id:8,
      label:"Contactez-nous",
      icon:"../../../../assets/icons/call.svg",
      url:"/index/contact",
      action:""
    },
    {
      id:9,
      label:"Informations",
      icon:"../../../../assets/icons/info-sign.svg",
      url:"/index/informations",
      action:""
    },
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

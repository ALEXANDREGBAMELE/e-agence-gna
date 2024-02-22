import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isSmallScreen: boolean = false;

  //notification Items data
  notificationItems = [
    {
      id:1,
      label:"Notification 1",
      icon:"../../../../assets/icons/notification.svg",
      durree:"2 heures",
      bgColor:"black"
    },
    {
      id:2,
      label:"Notification 1",
      icon:"../../../../assets/icons/notification.svg",
      durree:"3 jours",
      bgColor:"yellow"
    },
    {
      id:3,
      label:"Notification 1",
      icon:"../../../../assets/icons/notification.svg",
      durree:"5 jours",
      bgColor:"green"
    },
    {
      id:4,
      label:"Notification 1",
      icon:"../../../../assets/icons/notification.svg",
      durree:"5 jours",
      bgColor:"green"
    }
  ];

  lengthNotification = this.notificationItems.length;

  //profil Items data
  profilItems = [
    {
      id:1,
      label:"Notification 1",
      firstIcon:"../../../../assets/icons/notification.svg",
      lastIcon:"../../../../assets/icons/notification.svg",
      durree:"3"
    },
    {
      id:1,
      label:"Notification 1",
      icon:"../../../../assets/icons/notification.svg",
      durree:"Il y a 4 heures"
    }
  ];
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    initFlowbite();

    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  toggleSidebar(): void {
    this.navbarService.toggleVisibility();  
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Définir la taille de l'écran en dessous de laquelle le bouton doit être masqué
  }
}

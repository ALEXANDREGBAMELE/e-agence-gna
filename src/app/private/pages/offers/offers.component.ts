import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit{

  offresItems = [
    {
      id:1,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/Auto-01.png",
      action:""
    },
    {
      id:2,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/TRH-01.png",
      action:""
    },
    {
      id:3,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/Multirisque.png",
      action:""
    },
    {
      id:4,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/IA-01.png",
      action:""
    },
    {
      id:5,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/Auto-01.png",
      action:""
    },
    {
      id:6,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/TRH-01.png",
      action:""
    },
    {
      id:7,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/Multirisque.png",
      action:""
    },
    {
      id:8,
      label:"Assurance auto",
      description:" Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. ",
      image:"../../../../assets/images/IA-01.png",
      action:""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

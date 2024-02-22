import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-button',
  templateUrl: './customer-button.component.html',
  styleUrl: './customer-button.component.css'
})
export class CustomButtonComponent {
  @Input() buttonText: string = 'Button Text';
  @Input() buttonClass: string = 'default-button-class';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();


  handleClick() {
    this.buttonClick.emit();
  }

}

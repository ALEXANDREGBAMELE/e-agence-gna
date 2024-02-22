import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TransitionSpinerComponent } from './components/transition-spiner/transition-spiner.component';
import { CustomButtonComponent } from './components/customer-button/customer-button.component';


@NgModule({
  declarations: [
    TransitionSpinerComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TransitionSpinerComponent,
    CustomButtonComponent
  ]
})
export class SharedModule { }

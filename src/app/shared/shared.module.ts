import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TransitionSpinerComponent } from './components/transition-spiner/transition-spiner.component';


@NgModule({
  declarations: [
    TransitionSpinerComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TransitionSpinerComponent
  ]
})
export class SharedModule { }

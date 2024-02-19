import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransitionSpinerComponent } from './components/transition-spiner/transition-spiner.component';

const routes: Routes = [
  {
    path:'spiner',
    component: TransitionSpinerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

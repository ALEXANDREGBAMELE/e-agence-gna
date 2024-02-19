import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard',
        component: DashbordComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

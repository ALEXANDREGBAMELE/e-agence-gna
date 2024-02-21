import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ContratsComponent } from './pages/contrats/contrats.component';
import { SinistresComponent } from './pages/sinistres/sinistres.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard',
        component: DashbordComponent,
      },
      {
        path: 'offres',
        component: OffersComponent,
      },
      {
        path: 'contrats',
        component: ContratsComponent,
      },
      {
        path: 'sinistres',
        component: SinistresComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

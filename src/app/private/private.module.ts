import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { SharedModule } from '../shared/shared.module';
import { OffersComponent } from './pages/offers/offers.component';
import { ContratsComponent } from './pages/contrats/contrats.component';
import { SinistresComponent } from './pages/sinistres/sinistres.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    IndexComponent,
    SideNavComponent,
    HeaderComponent,
    DashbordComponent,
    OffersComponent,
    ContratsComponent,
    SinistresComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }

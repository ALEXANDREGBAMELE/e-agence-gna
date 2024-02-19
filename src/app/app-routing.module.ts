import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },*/
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

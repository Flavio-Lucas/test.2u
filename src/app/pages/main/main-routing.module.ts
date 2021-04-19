import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'establishment',
    loadChildren: () => import('./establishment/establishment.module').then( m => m.EstablishmentPageModule)
  },
  {
    path: 'collaborator',
    loadChildren: () => import('./collaborator/collaborator.module').then( m => m.CollaboratorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

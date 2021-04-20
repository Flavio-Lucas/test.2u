import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class HomePageModule {}

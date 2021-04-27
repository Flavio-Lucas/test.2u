import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentPageRoutingModule } from './establishment-routing.module';

import { EstablishmentPage } from './establishment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EstablishmentPage]
})
export class EstablishmentPageModule {}

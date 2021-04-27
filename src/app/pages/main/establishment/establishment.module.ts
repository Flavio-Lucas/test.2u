import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FooterModule } from '../../../components/footer/footer.module';

import { EstablishmentPageRoutingModule } from './establishment-routing.module';

import { EstablishmentPage } from './establishment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentPageRoutingModule,
    ReactiveFormsModule,
    FooterModule,
  ],
  declarations: [EstablishmentPage]
})
export class EstablishmentPageModule {}

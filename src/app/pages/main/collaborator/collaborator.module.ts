import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FooterModule } from '../../../components/footer/footer.module';

import { CollaboratorPageRoutingModule } from './collaborator-routing.module';

import { CollaboratorPage } from './collaborator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollaboratorPageRoutingModule,
    ReactiveFormsModule,
    FooterModule,
  ],
  declarations: [CollaboratorPage]
})
export class CollaboratorPageModule {}

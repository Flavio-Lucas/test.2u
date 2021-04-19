import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollaboratorPageRoutingModule } from './collaborator-routing.module';

import { CollaboratorPage } from './collaborator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollaboratorPageRoutingModule
  ],
  declarations: [CollaboratorPage]
})
export class CollaboratorPageModule {}

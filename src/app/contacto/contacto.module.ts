import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactoComponent } from './components/contacto/contacto.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    ContactoComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    WhatsappComponent
  ],
})
export class ContactoModule { }

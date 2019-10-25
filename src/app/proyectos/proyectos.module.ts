import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    ProyectosComponent,
    ProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
    MaterialModule

  ]
})
export class ProyectosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CalificarComponent } from './components/calificar/calificar.component';

@NgModule({
  declarations: [
    ProyectosComponent,
    ProyectoComponent,
    CalificarComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CalificarComponent
  ]
})
export class ProyectosModule { }

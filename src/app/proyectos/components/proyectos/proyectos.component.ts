import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../../interfaces/proyecto.interface';
import { ProyectosService } from './../../../core/services/proyectos/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(
    private proyectosService: ProyectosService
  ) { }

  ngOnInit() {
    this.proyectos = this.proyectosService.getProyectos();
    //console.log(this.proyectos);
  }

}

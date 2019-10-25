import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  @Input() proyectos: Proyecto[];

  constructor() {
   }

  ngOnInit() {
    console.log(this.proyectos);

  }

}

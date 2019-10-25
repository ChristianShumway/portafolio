import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../../interfaces/proyecto.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [
    {
      id:'1',
      titulo: 'Radio Ranchito',
      cliente: 'Presumiendo México',
      url: 'http://www.radioranchito.com.mx',
      descripcion: 'sitio web',
      imagen: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      id:'2',
      titulo: 'Ultra Noticias',
      cliente: 'Presumiendo México',
      url: 'http://ultranoticias.com.mx',
      descripcion: 'sitio web',
      imagen: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      id:'3',
      titulo: 'Presumiendo México',
      cliente: 'Presumiendo México',
      url: 'http://www.radioranchito.com.mx',
      descripcion: 'sitio web',
      imagen: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

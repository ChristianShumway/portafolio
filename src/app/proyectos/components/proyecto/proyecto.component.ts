import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CalificarComponent } from './../calificar/calificar.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  @Input() proyectos: Proyecto[];

  constructor(
    private bottomSheet: MatBottomSheet
  ) {
   }

  ngOnInit() {
    //console.log(this.proyectos);
  }

  openBottomSheet(id, titulo): void {
    let sheet = this.bottomSheet.open(CalificarComponent, {
      data: {
        id, 
        titulo
      }
    });

    sheet.backdropClick().subscribe( () => {
      console.log('clicked'+id);
    });  
  }

}

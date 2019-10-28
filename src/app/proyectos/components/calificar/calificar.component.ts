import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from './../../../core/services/proyectos/proyectos.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.scss']
})
export class CalificarComponent implements OnInit {
  
  // calificacion;
  formCalif: FormGroup
  isSubmitted = false;
  opcion= "";

  constructor(
    private bottomSheetRef: MatBottomSheetRef<CalificarComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private formBuilder: FormBuilder,
    private proyectosService: ProyectosService
  ) {
    this.getValidators();
  }

  ngOnInit() {
  }

  getValidators() {
    this.formCalif = this.formBuilder.group({
      calificacion: ['', Validators.required],
      comentario: ['', [Validators.required]]
    })
  }

  sendComment(event: MouseEvent): void {
    event.preventDefault();
    
    if(this.formCalif.value.calificacion){
      this.isSubmitted = false;
      this.bottomSheetRef.dismiss();
      const calificacion = {
        ...this.formCalif.value,
        id: this.data.id,
        proyecto: this.data.titulo,
        fecha: Date.now()
      };
      this.proyectosService.califProyect(calificacion)
      .then(
        () => console.log('su calificacion se agrego correctamente')
      )
      .catch(
        error => console.log(error)
      );
      console.log(calificacion);
    } else{
      this.isSubmitted = true;
    }
  }

  changeStatus(event){
    console.log(event);
  }
}

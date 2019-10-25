import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MessagesService } from './../../../core/services/messages/messages.service';
import { Router } from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { WhatsappComponent } from './../whatsapp/whatsapp.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {
  
  isLinear = false;
  formSend: FormGroup;
  active= false;
  
  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) {
    this.getValidations();
  }

  ngOnInit() {
  }

  getValidations() {
    this.formSend = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      comentario: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
    });
  }

  get nameField() {
    return this.formSend.get('nombre');
  }

  get emailField() {
    return this.formSend.get('email');
  }

  get commentField() {
    return this.formSend.get('comentario');
  }

  sendComment() {
    this.active = true;
    if(this.formSend.value){
      console.log(this.formSend.value);
      const msg = {
        ...this.formSend.value,
        fecha: Date.now()
      };
     this.messagesService.addComment(msg)
       .then(
       success => {
         console.log(success);
        this.formSend.reset();
         this.active = false;
       }
     )
     .catch(
       error => console.log(error)
     );
    }
  }

  openBottomSheet(): void {
    this.bottomSheet.open(WhatsappComponent);
  }


  

}

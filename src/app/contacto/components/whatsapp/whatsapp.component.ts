import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  myForm: FormGroup;
  yourNumber = "4491117391";
  yourMessage;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<WhatsappComponent>,
    private fb: FormBuilder
  ) {
      this.getValidations();
   }

  ngOnInit() {
  }

  getValidations() {
    this.myForm = this.fb.group({
      mensaje: ['', [Validators.required]]
    });
  }

  // @Output() messageOutput: EventEmitter<any> = new EventEmitter();

  sendWhatssApp(event: MouseEvent): void {
    event.preventDefault();
    this.bottomSheetRef.dismiss();
    if( this.myForm.valid) {
      this.yourMessage = this.myForm.value.mensaje;
      this.getLinkWhastapp(this.yourNumber, this.yourMessage);
    }
  }

  getLinkWhastapp(number, message) {
    // number = this.yourNumber;
    message = this.yourMessage.split(' ').join('%20');
    const urlWhatss = `https://api.whatsapp.com/send?phone=+52${number}&text=%20${message}`;
    console.log(urlWhatss);
    window.open(urlWhatss, '_blank');
    
      
  }

}

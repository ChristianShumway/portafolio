import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './services/messages/messages.service';

@NgModule({
  declarations: [
    MessagesService
  ],
  imports: [
  CommonModule
  ],
})
export class CoreModule { }

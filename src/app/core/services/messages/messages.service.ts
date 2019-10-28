import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private afdb: AngularFireDatabase
  ) { }


  addComment(message) {
    return this.afdb.object(`/messages/${message.fecha}`).set(message);
  }
}

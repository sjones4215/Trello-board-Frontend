import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  sendData(data: any): any {
    this.change.emit(data);
  }
}

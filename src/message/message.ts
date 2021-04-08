import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.ng.html',
})
export class Message {
  @Input() text;
}

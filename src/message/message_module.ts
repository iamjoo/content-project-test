import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Message} from './message';

@NgModule({
  declarations: [Message],
  exports: [Message],
})
export class MessageModule {}

import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InfiniteScrollModule} from '../infinite_scroll/infinite_scroll_module';
import {MessageModule} from '../message/message_module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MessageModule,
    ScrollingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

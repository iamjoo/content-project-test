import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {InfiniteScroll} from './infinite_scroll';

@NgModule({
  declarations: [InfiniteScroll],
  imports: [CommonModule],
  exports: [InfiniteScroll],
})
export class InfiniteScrollModule {}

import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnDestroy, Output, QueryList} from '@angular/core';

import {fromEvent, fromEventPattern, Observable, ReplaySubject} from 'rxjs';
import {filter, map, takeUntil, tap, throttleTime, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite_scroll.ng.html',
})
export class InfiniteScroll implements AfterContentInit, OnDestroy {
  private readonly indexToLoadMore$ = new ReplaySubject<number>(1);

  @Input()
  set indexToLoadMore(index: number) {
    this.indexToLoadMore$.next(index);
  }

  @Input() hasMoreData: boolean;
  @ContentChild(CdkVirtualScrollViewport) virtualScrollViewport: CdkVirtualScrollViewport;
  @ContentChildren('scrollItem') scrollEls: QueryList<HTMLElement>;

  @Output() loadMoreData = new EventEmitter<void>();

  private scrollIndex$: Observable<number>;
  private readonly destroy$ = new ReplaySubject<void>(1);

  ngAfterContentInit(): void {
    this.scrollIndex$ = this.virtualScrollViewport.scrolledIndexChange;

    this.setup();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setup(): void {
    this.scrollIndex$.pipe(
        withLatestFrom(this.indexToLoadMore$),
        filter(([scrolledIndex, indexToLoadMore]) => {
          return this.hasMoreData && scrolledIndex >= indexToLoadMore;
        }),
        throttleTime(50),
        takeUntil(this.destroy$),
        ).subscribe(() => {
          this.loadMoreData.emit();
        });
  }
}

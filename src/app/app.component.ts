import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = Array.from({length: 100}).map((a, i) => `Item #${i}`);

  getIndexToLoadMore(): number {
    return this.items.length - 22;
  }

  hasMoreData(): boolean {
    return this.items.length < 1000;
  }

  loadMoreData(): void {
    console.log('load more data');

    // Adds 100 more items
    this.items = this.items.concat(
        Array.from({length: 100})).map((a, i) => `Item #${i}`);
  }
}

import { map, startWith } from 'rxjs/operators'
import { Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Product } from 'app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent {
  @Input() products: Product[]
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 2],
    ['sm', 3],
    ['md', 5],
    ['lg', 2],
    ['xl', 3]
  ])

  constructor(private media: MediaObserver) {
    this.columns$ = this.media.asObservable()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias)),
        startWith(3)
      )
  }
}

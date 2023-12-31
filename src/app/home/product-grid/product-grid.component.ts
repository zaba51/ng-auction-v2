import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { Product, ProductService } from 'app/shared/services';

@Component({
  selector: 'nga-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridComponent {
  @Input() products: Product[] | null = [];
  readonly columns$ : Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 2 ],
    [ 'md', 3 ],
    [ 'lg', 4 ],
    [ 'xl', 5 ],
  ])

  constructor(private media: MediaObserver,
              private productService : ProductService) {
    // this.products$ = this.productService.getAll();

    this.columns$ = this.media.asObservable()
        .pipe(
          map(mc => <number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias)),
          startWith(3)
        )
  }
}

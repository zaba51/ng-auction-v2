import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from 'app/shared/services';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'nga-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  // readonly products$: Observable<Product[]>;
  
  // constructor(
  //   private productService: ProductService,
  //   private route: ActivatedRoute
  // ) {
  //   this.products$ = this.route.queryParams.pipe(
  //     switchMap(queryParams => this.productService.search(queryParams))
  //   )
  // }
}

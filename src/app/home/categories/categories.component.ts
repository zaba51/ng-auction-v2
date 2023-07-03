import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product, ProductService } from 'app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'nga-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly products$: Observable<Product[]>;

  constructor(
    private productService: ProductService
  ) {
    this.products$ = this.productService.getAll();
  }
}

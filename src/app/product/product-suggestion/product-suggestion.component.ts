import { Component, Input } from '@angular/core';
import { Product } from 'app/shared/services';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent {
  @Input() products: Product[]
}

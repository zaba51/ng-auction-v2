import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTabsModule } from '@angular/material/tabs';

import { ProductGridComponent } from './product-grid/product-grid.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    ProductGridComponent,
    CategoriesComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CategoriesComponent }
    ]),
    FlexLayoutModule,
    MatGridListModule,
    MatTabsModule
  ]
})
export class HomeModule { }

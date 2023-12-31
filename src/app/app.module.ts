import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routing';
import { ProductService } from './shared/services/product.service';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { SearchFormModule } from './shared/components/search-form/search-form.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,

    SearchFormModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

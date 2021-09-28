import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ServiceService } from './Services/service.service';
import { FilterPipe } from './shopping-cart/filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ProductListComponent,
    FilterComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

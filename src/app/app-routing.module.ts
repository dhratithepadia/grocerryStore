import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:'',
    component:ShoppingCartComponent
  },
  {
    path:'/cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import * as fromComponents from "./components/index";

import { ShoppingCartRoutingModule } from "./shopping-cart-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ShoppingCartRoutingModule],
  exports: []
})
export class ShoppingCartModule {}

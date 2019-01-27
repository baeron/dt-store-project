import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  declarations: [],
  imports: [ProductsRoutingModule, HttpClientModule]
})
export class ProductsModule {}

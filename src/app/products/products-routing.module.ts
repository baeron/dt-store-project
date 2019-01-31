import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: fromContainers.CategorysComponent
  },
  {
    path: "category/:categoryId",
    component: fromContainers.CategoryItemComponent
  },
  {
    path: "category/product/:productId",
    component: fromContainers.ProductComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    ...fromContainers.productContainers,
    ...fromComponents.productComponents
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}

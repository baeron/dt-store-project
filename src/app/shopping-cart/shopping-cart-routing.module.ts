import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";
import * as fromComponents from "./components";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: fromContainers.ShoppingCartComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    ...fromContainers.shoppingCartContainers,
    ...fromComponents.shopingCartComponents
  ],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}

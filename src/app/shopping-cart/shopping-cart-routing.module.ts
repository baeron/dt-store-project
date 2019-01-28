import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromcontainers from "./containers";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: fromcontainers.ShoppingCartComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...fromcontainers.shoppingCartContainers],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}

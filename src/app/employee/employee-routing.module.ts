import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import * as fromContainers from "./containers";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: fromContainers.EmployeeOrdersComponent
  },
  {
    path: "orders/:orderId",
    component: fromContainers.ItemOrderComponent
  },
  {
    path: "products",
    component: fromContainers.ProductListComponent
  },
  {
    path: "products/:productId",
    component: fromContainers.ItemProductComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [...fromContainers.employeePageComponents],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}

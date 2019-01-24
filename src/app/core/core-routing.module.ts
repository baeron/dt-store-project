import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

const CORE_ROUTERS: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: fromContainers.HomeComponent
  },
  {
    path: "sign-up",
    component: fromContainers.SignUpComponent
  },
  {
    path: "sign-in",
    component: fromContainers.SignInComponent
  },
  {
    path: "admin",
    canActivate: [""],
    loadChildren: "../admin/admin.module#AdminModule"
  },
  {
    path: "employee",
    canActivate: [],
    loadChildren: "../employee/employee.module#EmployeeModule"
  },
  {
    path: "product_list",
    loadChildren: "../products/products.module#ProductsModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(CORE_ROUTERS)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

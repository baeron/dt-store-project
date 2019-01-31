import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RoleGuardService } from "./services/role-guard.service";
import { AuthGuardService } from "./services/auth-guard.service";

const CORE_ROUTERS: Routes = [
  {
    path: "",
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
    canActivate: [RoleGuardService],
    loadChildren: "../admin/admin.module#AdminModule"
  },
  {
    path: "employee",
    canActivate: [RoleGuardService],
    loadChildren: "../employee/employee.module#EmployeeModule"
  },
  {
    path: "profile",
    canActivate: [AuthGuardService],
    component: fromContainers.ProfileComponent
  },
  {
    path: "product_list",
    loadChildren: "../products/products.module#ProductsModule"
  },
  {
    path: "shoping_cart",
    loadChildren: "../shopping-cart/shopping-cart.module#ShoppingCartModule"
  },
  {
    path: "404",
    component: fromContainers.NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(CORE_ROUTERS)
  ],
  declarations: [...fromContainers.coreContainers],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

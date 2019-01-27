import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromcontainers from "./containers";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RoleGuardService } from "./services/role-guard.service";
import { AuthGuardService } from "./services/auth-guard.service";

const CORE_ROUTERS: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: fromcontainers.HomeComponent
  },
  {
    path: "sign-up",
    component: fromcontainers.SignUpComponent
  },
  {
    path: "sign-in",
    component: fromcontainers.SignInComponent
  },
  {
    path: "admin",
    canActivate: [RoleGuardService],
    loadChildren: "../admin/admin.module#AdminModule"
  },
  {
    path: "employee",
    canActivate: [],
    loadChildren: "../employee/employee.module#EmployeeModule"
  },
  {
    path: "profile",
    canActivate: [],
    component: fromcontainers.ProfileComponent
  },
  {
    path: "product_list",
    loadChildren: "../products/products.module#ProductsModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(CORE_ROUTERS)
  ],
  declarations: [...fromcontainers.coreContainers],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class CoreRoutingModule {}

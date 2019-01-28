import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { EmployeeRoutingModule } from "./employee-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, EmployeeRoutingModule, HttpClientModule]
})
export class EmployeeModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts/ng2-charts";

import { AdminPanelComponent } from "./containers/admin-panel/admin-panel.component";

const ADMIN_ROUTERS: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AdminPanelComponent
  }
];

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, ChartsModule, RouterModule.forChild(ADMIN_ROUTERS)],
  exports: [RouterModule, AdminPanelComponent]
})
export class AdminRoutingModule {}

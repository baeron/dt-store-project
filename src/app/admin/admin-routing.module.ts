import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

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
  imports: [CommonModule, RouterModule.forChild(ADMIN_ROUTERS)],
  exports: [RouterModule, AdminPanelComponent]
})
export class AdminRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import * as fromComponents from "./components";

import { CoreRoutingModule } from "./core-routing.module";
@NgModule({
  imports: [CommonModule, CoreRoutingModule],
  declarations: [...fromComponents.coreComponents],
  exports: [...fromComponents.coreComponents]
})
export class CoreModule {}

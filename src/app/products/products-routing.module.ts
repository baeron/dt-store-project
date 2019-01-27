import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CategorysComponent } from "./containers/categorys/categorys.component";
import { ItemCategoryComponent } from "./components/item-category/item-category.component";
import { CategoryItemComponent } from "./containers/category-item/category-item.component";
import { ItemProductComponent } from "./components/item-product/item-product.component";
import { ProductComponent } from "./containers/product/product.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CategorysComponent
  },
  {
    path: "category/:categoryId",
    component: CategoryItemComponent
  },
  {
    path: "category/:categoryId/product/:productId",
    component: ProductComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    CategorysComponent,
    ItemCategoryComponent,
    CategoryItemComponent,
    ItemProductComponent,
    ProductComponent
  ],
  exports: [RouterModule, CategorysComponent, CategoryItemComponent]
})
export class ProductsRoutingModule {}

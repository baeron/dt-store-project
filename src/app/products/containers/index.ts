import { ProductComponent } from "./product/product.component";
import { CategorysComponent } from "./categorys/categorys.component";
import { CategoryItemComponent } from "./category-item/category-item.component";

export const productContainers: any[] = [
  ProductComponent,
  CategorysComponent,
  CategoryItemComponent
];

export * from "./product/product.component";
export * from "./categorys/categorys.component";
export * from "./category-item/category-item.component";

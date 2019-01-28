import { EmployeeOrdersComponent } from "./employee-orders/employee-orders.component";
import { ItemOrderComponent } from "./item-order/item-order.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ItemProductComponent } from "../containers/item-product/item-product.component";

export const employeePageComponents: any[] = [
  EmployeeOrdersComponent,
  ItemOrderComponent,
  ProductListComponent,
  ItemProductComponent
];

export * from "./employee-orders/employee-orders.component";
export * from "./item-order/item-order.component";
export * from "./product-list/product-list.component";
export * from "./item-product/item-product.component";

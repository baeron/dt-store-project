import { Component, Input } from "@angular/core";
import Product from "../../../models/product.model";

@Component({
  selector: "app-category-item-product",
  templateUrl: "./category-item-product.component.html",
  styleUrls: ["./category-item-product.component.scss"]
})
export class CategoryItemProductComponent {
  BASE_PATH = "/product_list/category/product/";
  @Input() itemProduct: Product;
}

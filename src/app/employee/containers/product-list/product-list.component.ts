import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";

import Product from "../../../models/product.model";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getAllProducts().subscribe(productList => {
      this.products = productList;
    });
  }

  goToItemProduct(itemProduct: string) {
    this.router.navigate(["employee/products", itemProduct]);
  }
}

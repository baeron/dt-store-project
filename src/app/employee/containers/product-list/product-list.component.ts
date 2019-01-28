import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  // FIXME: Change any to custom TYPE
  public products: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getAllProducts().subscribe(productList => {
      this.products = productList;
    });
  }

  goToItemProduct(itemProduct) {
    // go to item product
  }
}

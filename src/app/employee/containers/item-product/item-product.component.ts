import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Router, ActivatedRoute } from "@angular/router";

import Product from "../../../models/product.model";
@Component({
  selector: "app-item-product",
  templateUrl: "./item-product.component.html",
  styleUrls: ["./item-product.component.scss"]
})
export class ItemProductComponent implements OnInit {
  productId: string;
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params["productId"];
    this.getProduct(this.productId);
  }

  getProduct(productId: string) {
    this.productService.getProductById(productId).subscribe(itemProduct => {
      this.product = itemProduct;
    });
  }

  onSubmit() {
    this.productService.updateProductById(this.product).subscribe(data => {
      debugger;
      console.log(data);
    });
  }
}

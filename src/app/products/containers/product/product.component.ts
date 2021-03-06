import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CategoryService } from "./../../services/category.service";
import Product from "../../../models/product.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  product: Product;
  productId: string;
  productImg: string;

  constructor(
    private route: ActivatedRoute,
    private itemProductService: CategoryService,
    private cartService: CartService
  ) {
    this.productId = this.route.snapshot.params["productId"];
  }

  ngOnInit() {
    this.getItemProduct(this.productId);
    // "https://cdnimg.webstaurantstore.com/images/products/xxl/217037/949912.jpg";
  }

  getItemProduct(Id: string) {
    this.itemProductService.getProductById(Id).subscribe(itemProduct => {
      this.product = itemProduct;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

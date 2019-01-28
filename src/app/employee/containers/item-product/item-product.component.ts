import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-product",
  templateUrl: "./item-product.component.html",
  styleUrls: ["./item-product.component.scss"]
})
export class ItemProductComponent implements OnInit {
  productId: string;
  // FIXME: change to cast TYPE
  product: any;
  //
  tmp: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    debugger;
    this.productId = this.route.snapshot.params["productId"];
    this.getProduct(this.productId);
  }

  getProduct(productId: string) {
    this.productService.getProductById(productId).subscribe(itemProduct => {
      this.product = itemProduct;
    });
  }

  onSubmit() {
    this.productService.updateProductById(this.product).subscribe(res => {
      this.tmp = res;
      debugger;
      console.log(this.tmp);
    });
  }
}

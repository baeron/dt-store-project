import { CartService } from "./products/services/cart.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import Product from "./models/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public shoppingCartItems$: Observable<Product[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => _);
  }
}

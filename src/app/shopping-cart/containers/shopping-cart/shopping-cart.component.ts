import { CartService } from "./../../../products/services/cart.service";
import { Observable, of } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/products/models/product.model";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems$: Observable<Product[]> = of([]);
  shoppingCartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(boughtItems => {
      this.shoppingCartItems = boughtItems;
    });
  }

  getTotal(): Observable<number> {
    return this.cartService.getTotalAmmount();
  }

  removeItem(item: Product) {
    this.cartService.removeFromCart(item);
  }
}

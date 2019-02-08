import { CartService } from "./../../../products/services/cart.service";
import { Observable, of } from "rxjs";
import { Component, OnInit } from "@angular/core";
import Product from "../../../models/product.model";

import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  userEmail: string;
  shoppingCartItems$: Observable<Product[]> = of([]);
  shoppingCartItems: Product[] = [];
  isSuccess: boolean;

  constructor(
    private cartService: CartService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem("dt-shop-user-email");
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(boughtItems => {
      this.shoppingCartItems = boughtItems;
    });
  }

  getTotal(): Observable<number> {
    return this.cartService.getTotalAmmount();
  }

  onRemoveItem(itemBought: Product) {
    this.cartService.removeFromCart(itemBought);
  }

  buyAll() {
    this.cartService.postNewOrder(this.shoppingCartItems$).subscribe(data => {
      if (data.message === "Created") {
        this.shoppingCartItems$ = this.cartService.resetItems();
        this._flashMessagesService.show(
          "Congratulations. You make a purchase in our shop.",
          {
            cssClass: "alert-success",
            timeout: 3000
          }
        );
        this.router.navigate(["/"]);
      } else {
        console.error("Something went wrong");
        this._flashMessagesService.show("Something went wrong.", {
          cssClass: "alert-danger",
          timeout: 3000
        });
      }
    });
  }
}

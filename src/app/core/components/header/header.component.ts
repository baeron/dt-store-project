import { Component, OnInit, Input } from "@angular/core";
import Tab from "./tab";
import { Observable } from "rxjs";
import { Product } from "src/app/products/models/product.model";
import { CartService } from "src/app/products/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  // FIXME: Change type ANY to custom type
  // @Input() shoppingCartItems: any;
  shoppingCartItems$: Observable<Product[]>;

  companiIcon: string;
  isStaticTabsShow = true;
  isAuthTabShow = true;
  isRegisterTabShow = true;

  staticTabs: Tab[] = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/product_list" }
  ];

  authTab: Tab = { name: "Sign In", url: "/sign-in" };
  registerTab: Tab = { name: "Sign Up", url: "/sign-up" };
  shoppingCartTab: Tab = { name: "Shopping Cart", url: "/shoping_cart" };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.companiIcon = "../../assets/nav/logo.png";
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => _);
  }
}

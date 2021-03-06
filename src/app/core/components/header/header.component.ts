import { AuthenticationService } from "./../../services/authentication.service";
import { Component, OnInit, Input } from "@angular/core";
import NavigationTab from "../../../models/tab.model";
import { Observable } from "rxjs";
import Product from "../../../models/product.model";
import { CartService } from "src/app/products/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  shoppingCartItems$: Observable<Product[]>;

  companiIcon: string;
  isStaticTabsShow = true;
  isAuthTabShow = false;
  isEmployee = false;
  isRegisterTabShow = true;

  staticTabs: NavigationTab[] = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/product_list" }
  ];

  authTab: NavigationTab = { name: "Sign In", url: "/sign-in" };
  registerTab: NavigationTab = { name: "Sign Up", url: "/sign-up" };
  shoppingCartTab: NavigationTab = {
    name: "Shopping Cart",
    url: "/shoping_cart"
  };

  profileTab: NavigationTab = { name: "Profile", url: "/profile" };

  constructor(
    private cartService: CartService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.companiIcon = "../../assets/nav/logo.png";
    this.shoppingCartItems$ = this.cartService.getItems();
    this.shoppingCartItems$.subscribe(_ => _);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.isAuthTabShow = this.auth.isAuthenticated();
  }

  userLogout() {
    this.auth.logout();
  }
}

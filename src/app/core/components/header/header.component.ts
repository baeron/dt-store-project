import { Component, OnInit } from "@angular/core";
import Tab from "./tab";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
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
}

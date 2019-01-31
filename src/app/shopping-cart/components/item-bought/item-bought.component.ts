import { Component, Input, Output, EventEmitter } from "@angular/core";
import Product from "../../../models/product.model";

@Component({
  selector: "app-item-bought",
  templateUrl: "./item-bought.component.html",
  styleUrls: ["./item-bought.component.scss"]
})
export class ItemBoughtComponent {
  @Input() boughtItem: Product;
  @Input() index: number;
  @Output() removeItem = new EventEmitter<Product>();

  removeItemProduct(boughtItem: Product) {
    this.removeItem.emit(boughtItem);
  }
}

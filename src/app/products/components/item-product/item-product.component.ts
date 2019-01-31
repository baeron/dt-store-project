import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-product",
  templateUrl: "./item-product.component.html",
  styleUrls: ["./item-product.component.scss"]
})
export class ItemProductComponent implements OnInit {
  @Input() item_product: any;
  categoryId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.params["id"];
  }
}

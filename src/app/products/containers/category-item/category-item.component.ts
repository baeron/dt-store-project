import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  categoryData: any;

  constructor() {}

  ngOnInit() {
    this.categoryData = [
      {
        categoryId: 1,
        categoryName: "First",
        productId: 11,
        productName: "FirstProduct",
        productPrice: 11.11
      },
      {
        categoryId: 1,
        categoryName: "First",
        productId: 12,
        productName: "SecondProduct",
        productPrice: 12.12
      }
    ];
  }
}

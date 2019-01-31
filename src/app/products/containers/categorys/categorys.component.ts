import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import Category from "../../../models/category.model";

@Component({
  selector: "app-categorys",
  templateUrl: "./categorys.component.html",
  styleUrls: ["./categorys.component.scss"]
})
export class CategorysComponent implements OnInit {
  categories: Category[];

  constructor(private categoriesService: CategoryService) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(cateroryList => {
      this.categories = cateroryList;
    });
  }
}

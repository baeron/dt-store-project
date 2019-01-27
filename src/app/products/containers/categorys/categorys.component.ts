import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: "app-categorys",
  templateUrl: "./categorys.component.html",
  styleUrls: ["./categorys.component.scss"]
})
export class CategorysComponent implements OnInit {
  categories: any;

  constructor(private categoriesService: CategoryService) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(cateroryList => {
      this.categories = cateroryList;
    });
  }
}

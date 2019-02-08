import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
// import Category from "../../models/category";
import Category from "../../../models/category.model";

@Component({
  selector: "app-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  categoryData$: Observable<Category>;
  categoryId: string;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryId = this.route.snapshot.params["categoryId"];
    this.getCategoryDataById(this.categoryId);
  }

  getCategoryDataById(id: string) {
    this.categoryService.getCategoryById(id).subscribe(categoryElements => {
      console.log(categoryElements);
      this.categoryData$ = categoryElements;
    });
  }
}

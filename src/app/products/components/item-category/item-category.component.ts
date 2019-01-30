import { Component, OnInit, Input } from "@angular/core";
import { SafeStyle, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-item-category",
  templateUrl: "./item-category.component.html",
  styleUrls: ["./item-category.component.scss"]
})
export class ItemCategoryComponent implements OnInit {
  public backgroundImg: SafeStyle;
  @Input() category: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(
      "url(' + this.category.backgroundImage + ')"
    );
  }
}

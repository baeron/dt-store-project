import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  placeholder_img: string;
  constructor() {}

  ngOnInit() {
    this.placeholder_img = "../../../assets/placeholder/placeholder.jpg";
  }
}

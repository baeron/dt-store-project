import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  footerImage: string;

  constructor() {}

  ngOnInit() {
    this.footerImage = "../../assets/footer/footer-bg.jpg";
  }
}

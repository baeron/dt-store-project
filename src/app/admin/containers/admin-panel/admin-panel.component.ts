import { Component, OnInit } from "@angular/core";
import { SalesService } from "../../servises/sales.service";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.scss"]
})
export class AdminPanelComponent implements OnInit {
  // FIXME cast too item type
  sales: any;
  public doughnutChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = "doughnut";

  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.salesService.getAllSales().subscribe(salesList => {
      this.sales = salesList;
      debugger;
      console.log(this.sales);
    });
  }
}

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
  public doughnutChartData: number[] = [];
  public doughnutChartType = "doughnut";

  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.salesService.getAllSold().subscribe(salesList => {
      console.log(salesList);
      this.sales = salesList;
      this.getDataFromDoughnutChar(salesList);
    });
  }

  getDataFromDoughnutChar(sales) {
    const saleList = sales;
    let totalItemShoppingCartPrice: number;
    for (let i = 0; i < saleList.length; ++i) {
      const itemSalesEl = saleList[i].products;
      totalItemShoppingCartPrice = 0;
      for (const key of itemSalesEl) {
        totalItemShoppingCartPrice += key.price;
      }
      this.sales[i].totalCardMoney = totalItemShoppingCartPrice;
      this.doughnutChartData.push(totalItemShoppingCartPrice);
    }
  }

  itemShoppingCardTotalPrice(itemSale) {}
}

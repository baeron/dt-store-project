import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: "app-employee-orders",
  templateUrl: "./employee-orders.component.html",
  styleUrls: ["./employee-orders.component.scss"]
})
export class EmployeeOrdersComponent implements OnInit {
  public orders: any;

  constructor(private orderService: OrdersService, private router: Router) {}

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getOrders().subscribe(orderList => {
      this.orders = orderList;
    });
  }

  // FIXME: check right route by ID
  goToItemOrder(orderId) {
    debugger;
    this.router.navigate(["/orders", orderId]);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OrdersService } from "../../services/orders.service";
import Order from "../../../models/order.model";

@Component({
  selector: "app-employee-orders",
  templateUrl: "./employee-orders.component.html",
  styleUrls: ["./employee-orders.component.scss"]
})
export class EmployeeOrdersComponent implements OnInit {
  public orders: Order[];

  constructor(private orderService: OrdersService, private router: Router) {}

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getOrders().subscribe(orderList => {
      this.orders = orderList;
    });
  }

  goToItemOrder(orderId: number) {
    this.router.navigate(["employee/orders", orderId]);
  }
}

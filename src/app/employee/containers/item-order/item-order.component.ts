import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrdersService } from "../../services/orders.service";
import { Status } from "../../../models/order.model";
import Order from "../../../models/order.model";

@Component({
  selector: "app-item-order",
  templateUrl: "./item-order.component.html",
  styleUrls: ["./item-order.component.scss"]
})
export class ItemOrderComponent implements OnInit {
  orderId: string;
  order: Order;

  constructor(
    private orderService: OrdersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orderId = this.route.snapshot.params["orderId"];
    this.getItemOrder(this.orderId);
  }

  getItemOrder(id: string) {
    this.orderService.getOrderById(id).subscribe(itemOrder => {
      this.order = itemOrder;
    });
  }

  isOrderComplete() {
    this.order.status = Status.Fulfilled;
    this.orderService.putFulfilledStatusForItemOrder(this.order).subscribe();
  }
}

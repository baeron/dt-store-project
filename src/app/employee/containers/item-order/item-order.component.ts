import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: "app-item-order",
  templateUrl: "./item-order.component.html",
  styleUrls: ["./item-order.component.scss"]
})
export class ItemOrderComponent implements OnInit {
  orderId: string;
  // FIXME: change type ANY to custom type
  order: any;
  //
  tmp: any;

  constructor(
    private orderService: OrdersService,
    private router: Router,
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
    this.order.status = "fulfilled";
    this.orderService
      .putFulfilledStatusForItemOrder(this.order)
      .subscribe(res => {
        this.tmp = res;
      });
  }
}

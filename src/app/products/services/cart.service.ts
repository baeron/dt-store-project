import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject(
    []
  );
  private itemsInCart: Product[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => (this.itemsInCart = _));
  }

  addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  getItems(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }

  getTotalAmmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(
      map((items: Product[]) => {
        return items.reduce((prev, curr: Product) => {
          return prev + curr.price;
        }, 0);
      })
    );
  }

  removeFromCart(item: Product) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }
}

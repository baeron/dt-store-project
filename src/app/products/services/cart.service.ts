import { Injectable } from "@angular/core";
import Product from "../../models/product.model";
import { BehaviorSubject, Observable, throwError, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

const SALES = "http://localhost:3000/orders";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject(
    []
  );
  private itemsInCart: Product[] = [];

  constructor(private http: HttpClient) {
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

  createNewOrder(shopingCart): Observable<any> {
    const shopCart = {
      id: 777,
      userId: 777,
      userEmail: "user777@user.com",
      orderId: 777,
      status: "fulfilled",
      totalPrice: 77.77,
      totalItems: 2,
      userOrders: [
        {
          categoryName: "first",
          categoryId: 1,
          id: 11,
          name: "first-first",
          price: 11.11
        },
        {
          categoryName: "second",
          categoryId: 2,
          id: 12,
          name: "first-second",
          price: 12.12
        }
      ]
    };
    return this.http
      .post("http://localhost:3000/orders", shopCart)
      .pipe(catchError(this.handleError("createNewOrder")));
  }

  removeFromCart(item: Product) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

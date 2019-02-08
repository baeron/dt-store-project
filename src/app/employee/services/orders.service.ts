import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { watch } from "rxjs-watcher";

// TODO: move to dev and prod environvent
const ORDERS = " http://localhost:3001/api/shopping-carts/";

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // FIXME: change type any to different tipe like as ORDERS
  getOrders(): Observable<any> {
    return this.http.get(ORDERS).pipe(
      tap(_ => console.log("fetched ORDERS")),
      catchError(this.handleError("getOrders", []))
    );
  }

  // FIXME: cust type ANY to diferent custom type dor ORDERS
  getOrderById(id: string): Observable<any> {
    return this.http.get(ORDERS + id).pipe(
      tap(_ => console.log("fetch item order")),
      catchError(this.handleError("getOrderById"))
    );
  }

  // FIXME: change this to item tipe OBSERVABLE
  putFulfilledStatusForItemOrder(order) {
    const url = ORDERS + order._id;
    return this.http.put(url, order).pipe(
      tap(_ => console.log("update item order")),
      catchError(this.handleError("getOrderById"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

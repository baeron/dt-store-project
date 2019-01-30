import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { watch } from "rxjs-watcher";
import { tap, catchError } from "rxjs/operators";

const PRODUCTS = "http://localhost:3000/products/";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // FIXME: change type any to different tipe like as ORDERS
  getAllProducts(): Observable<any> {
    return this.http.get(PRODUCTS).pipe(
      watch("Interval (10)", 10),
      tap(_ => console.log("fetched Products")),
      catchError(this.handleError("getAllProducts", [])),
      watch("Filter odd numbers out", 10)
    );
  }

  // FIXME: change type any to different tipe like as ORDERS
  getProductById(productId: string): Observable<any> {
    debugger;
    return this.http.get(PRODUCTS + productId).pipe(
      tap(_ => console.log("fetched product by Id")),
      catchError(this.handleError("getItemProduct", []))
    );
  }

  // FIXME: change type any to different tipe like as ORDERS
  updateProductById(order) {
    debugger;
    const url = PRODUCTS + order.id;
    return this.http.put(url, order).pipe(
      tap(_ => console.log("update item product")),
      catchError(this.handleError("updateProductById"))
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
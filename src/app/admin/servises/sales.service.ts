import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

const SALES_LINK = "http://localhost:3001/api/shopping-cart/sold";
// "/api/shopping-cart/sold";

@Injectable({
  providedIn: "root"
})
export class SalesService {
  constructor(private http: HttpClient) {}

  getAllSold(): Observable<any> {
    return this.http.get<any>(SALES_LINK).pipe(
      tap(_ => console.log("get all sold")),
      catchError(this.handleError("getAllSold", []))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

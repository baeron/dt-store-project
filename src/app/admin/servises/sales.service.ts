import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

const SALES_LINK = "http://localhost:3000/sales";

@Injectable({
  providedIn: "root"
})
export class SalesService {
  constructor(private http: HttpClient) {}

  // FIXME: change all ANY type to CUSTON TYPE
  getAllSales(): Observable<any> {
    return this.http.get<any>(SALES_LINK).pipe(
      tap(_ => console.log("get all sales")),
      catchError(this.handleError("getAllSales", []))
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

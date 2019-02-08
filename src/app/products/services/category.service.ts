import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import Category from "../../models/category.model";
import Product from "../../models/product.model";

const CATEGORY = "http://localhost:3001/api/categories/";
const PRODUCTS_BY_CATEGORY = "http://localhost:3001/api/products/category/";
const ITEM_PRODUCT = " http://localhost:3001/api/products/";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(CATEGORY).pipe(
      tap(_ => console.log("fetched categories")),
      catchError(this.handleError("getCategories", []))
    );
  }

  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get(PRODUCTS_BY_CATEGORY + categoryId).pipe(
      tap(_ => console.log("fetch data from category by ID")),
      catchError(this.handleError("getCategoryById"))
    );
  }

  getProductById(id: string): Observable<any> {
    const str = ITEM_PRODUCT + id;
    console.log(str);
    return this.http.get<any>(ITEM_PRODUCT + id).pipe(
      tap(_ => console.log("fetch item product")),
      catchError(this.handleError("getProductById"))
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

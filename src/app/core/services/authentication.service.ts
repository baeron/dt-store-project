import { catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import decode from "jwt-decode";

const registerUrl = "http://localhost:3000/users/";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  token = {
    refresh_token: "refreshtokencode",
    exp: new Date(new Date().getDate() + 1),
    access_token: {
      username: "user",
      roles: ["Admin", "RegisteredUser", "Employee"]
    }
  };

  tokenKey = "a5smm_utoken";

  constructor(private router: Router, private http: HttpClient) {}

  registerUser(user): Observable<any> {
    return this.http.post(registerUrl, user).pipe(catchError(this.handleError));
  }

  updateUser(userData, userId) {
    const url = registerUrl + userId;
    return this.http.put(url, userData).pipe(
      tap(_ => console.log("update item order")),
      catchError(this.handleError)
    );
  }

  getUserById(id) {
    const USER_BY_ID = registerUrl + id;
    return this.http.get(USER_BY_ID).pipe(catchError(this.handleError));
  }

  authenticateUser(user): Observable<any> {
    const authenticateUrl = "http://localhost:3000/users";
    if (user.userEmail === "user@user.com" && user.userPass === "user123") {
      // tslint:disable-next-line:max-line-length
      localStorage.setItem("token", `userToken`);
      localStorage.setItem("dt-shop-user-email", `${user.userEmail}`);

      // FIXME: change when we will have real backend
      return this.http.get(authenticateUrl + "/222").pipe(
        tap(_ => console.log("fetched user data")),
        catchError(this.handleError)
      );
    } else if (
      user.userEmail === "employee@employee.com" &&
      user.userPass === "employee123"
    ) {
      // tslint:disable-next-line:max-line-length
      localStorage.setItem(
        "token",
        // tslint:disable-next-line:max-line-length
        `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo`
      );
      // FIXME: change when we will have real backend
      return this.http.get(authenticateUrl + "/111").pipe(
        tap(_ => console.log("fetched employee data")),
        catchError(this.handleError)
      );
    } else if (
      user.userEmail === "admin@admin.com" &&
      user.userPass === "123admin"
    ) {
      // tslint:disable-next-line:max-line-length
      localStorage.setItem(
        "token",
        // tslint:disable-next-line:max-line-length
        `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE`
      );
      // FIXME: change when we will have real backend
      return this.http.get(authenticateUrl + "/1").pipe(
        tap(_ => console.log("fetched admin data")),
        catchError(this.handleError)
      );
    } else {
      // FIXME: change when we will have real backend
      return this.http.get(authenticateUrl + "/999").pipe(
        tap(_ => console.log("fetched fake user data")),
        catchError(this.handleError)
      );
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("token") != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  logout(): void {
    this.clear();
    this.router.navigate(["/sign-in"]);
  }

  clear(): void {
    localStorage.clear();
  }

  decode() {
    return decode(localStorage.getItem("token"));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}

import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  /**
   *
   * @param next
   * @param state
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authentication.isAuthenticated()) {
      return true;
    }

    this.router.navigate(["/sign-up"]);
    return false;
  }

  /**
   * Method to send user to login page
   */
  redirectToLoginPage() {
    this.router.navigate(["/sign-in"]);
  }
}

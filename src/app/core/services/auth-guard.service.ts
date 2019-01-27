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

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authentication.isAuthenticated()) {
      return true;
    }

    // navigate to login page
    this.router.navigate(["/sign-up"]);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

  redirectToLoginPage() {
    this.router.navigate(["/sign-in"]);
  }
}

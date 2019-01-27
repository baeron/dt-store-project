import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RoleGuardService {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = this._authService.decode();

    if (user.Role === next.data.role) {
      return true;
    }

    // navigate to not found page
    this._router.navigate(["/"]);
    return false;
  }
}

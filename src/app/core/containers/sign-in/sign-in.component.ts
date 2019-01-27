import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  userData: any;
  error: any;

  constructor(
    private router: Router,
    private logInFormBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.logInFormBuilder.group({
      userEmail: [""],
      userPass: [""]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const user = this.loginForm.value;
    this.authService.authenticateUser(user).subscribe(
      data => {
        this.userData = data;
        localStorage.setItem(
          "dt_shop_user_data",
          JSON.stringify(this.userData)
        );

        this.router.navigate(["/product_list"]);
      },
      error => {
        localStorage.removeItem("dt_shop_user_data");
        (this.error = <any>error), this.router.navigate(["/"]);
      }
    );
  }
}

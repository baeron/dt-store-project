import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data: any;
  error: any;

  constructor(
    private router: Router,
    private signUpForm: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userPass: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const user = this.registerForm.value;
    user.token = "user_token";
    this.authService.registerUser(user).subscribe(
      data => {
        this.data = data;
        this.router.navigate(["/product_list"]);
      },
      error => {
        (this.error = <any>error), this.router.navigate(["/"]);
      }
    );
  }
}

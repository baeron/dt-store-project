import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user: any;
  itemUser: any;
  u: any;
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    const user = localStorage.getItem("dt_shop_user_data");
    this.u = JSON.parse(user);
    console.log(user);

    this.user = this.auth.getUserById(this.u.id).subscribe(data => {
      this.itemUser = data;
    });
  }

  saveUserData(userForm) {
    this.auth.updateUser(userForm, this.u.id).subscribe();
  }
}

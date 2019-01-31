import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const coreContainers: any[] = [
  HomeComponent,
  ProfileComponent,
  SignInComponent,
  SignUpComponent,
  NotFoundComponent
];

export * from "./home/home.component";
export * from "./profile/profile.component";
export * from "./sign-in/sign-in.component";
export * from "./sign-up/sign-up.component";
export * from "./not-found/not-found.component";

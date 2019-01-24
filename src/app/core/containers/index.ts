import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const coreContainers: any[] = [
  HeaderComponent,
  HomeComponent,
  SignInComponent,
  SignUpComponent
];

export * from "./header/header.component";
export * from "./home/home.component";
export * from "./sign-in/sign-in.component";
export * from "./sign-up/sign-up.component";

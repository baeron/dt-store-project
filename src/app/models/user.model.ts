export default interface User {
  login: string;
  email: string;
  password: string;
  token?: string;
  id?: number;
}

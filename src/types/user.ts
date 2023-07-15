export interface Iuser {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}
export interface IuserCreds {
  email?: string;
  phone_number?: string;
  password: string;
}

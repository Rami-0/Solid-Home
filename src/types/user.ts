export interface Iuser {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  accessToken?: string;
}

export interface loginCreds {
  email?: string;
  phone_number?: string;
  password: string;
}

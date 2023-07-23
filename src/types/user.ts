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

export interface VerificationData {
  email?: string;
  phoneNumber?: string;
}

export interface otp {
  verification_code: number;
}

export interface password {
  password1: string;
  password2: string;
}

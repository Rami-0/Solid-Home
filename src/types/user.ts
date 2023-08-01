export interface Iuser {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  accessToken?: string;
  roles?: Array<number>;
}

export interface loginCreds {
  email?: string | null;
  phone_number?: string | null;
  password: string;
}

export interface VerificationData {
  user_id: number;
  email?: boolean;
  phoneNumber?: boolean;
}

export interface otp {
  user_id: number;
  verification_code: number;
}

export interface password {
  user_id: number;
  password1: string;
  password2: string;
}

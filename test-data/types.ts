export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
    access_token:string,
    token_type:string,
    expires_in:string
}

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserResponse {
    first_name:string, 
    last_name:string,
    address:{
        street:string
        house_number:string | null,
        city:string,
        state:string | null,
        country:string
        postal_code:string | null
    },
    phone:string | null,
    dob:string,
    email:string,
    id:string,
    provider:string | null,
    totp_enabled:boolean,
    enabled:boolean,
    failed_login_attempts:number | null,
    created_at:string
}
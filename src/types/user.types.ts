export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  address: Address;
  country: string;
}

export interface Address {
  street: string;
  city: string;
  postcode: string;
  county: string;
}

export interface UserParams {
  id?: string
}

export interface UserQuery {
  email?: string;
}

export interface ApiResponse<T>{
    success : boolean,
    data? : T,
    error? : T
}

export interface UserResponse{
    id : string | undefined,
    email : string | undefined,
    message : string
}

export interface ErrorResponse{
    message : string
}

export interface ApiErrorResponse{
    success : boolean,
    message : string,
    error? : ErrorResponse
}

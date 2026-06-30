export interface UserResponse {
  success: boolean;
  data: CreateUser;
}

export interface CreateUser {
  id: number;
  email: string;
  contactNumber: string;
  page: number;
  limit: number;
}

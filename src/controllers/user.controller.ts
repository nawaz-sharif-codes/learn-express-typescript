import type { NextFunction, Request, Response } from "express";
import type {
  ApiResponse,
  ErrorResponse,
  User,
  UserParams,
  UserQuery,
  UserResponse,
} from "../types/user.types.js";

export function fetchAllUsers(
  request: Request<UserParams, {}, User, UserQuery>,
  response: Response<ApiResponse<UserResponse | ErrorResponse>>,
  next: NextFunction,
) {
  const { id } = request.params ?? crypto.randomUUID().replaceAll(/-/g, "");
  const { email } = request.query;
  if (!id && !email) {
    response.status(400).json({
      success: false,
      error: {
        message: "Bad Request, either id or email should exist",
      },
    });
  }
  response.status(200).json({
    success: true,
    data: { id, email, message: "User created successfully" },
  });
}

import type { Request, Response } from "express";
import axiosClient from "../axios/axiosClient.js";
import type { AxiosResponse } from "axios";
import type { ApiErrorResponse, ApiResponse } from "../types/user.types.js";
import type { Product, Products } from "../types/product.types.js";

export async function fetchProducts(
  request: Request,
  response: Response<ApiResponse<Product[]> | ApiErrorResponse>,
) {
  const apiResponse = await axiosClient.get<Products>("/products");
  const products = apiResponse.data.products.map((item) => {
    const transform : Product = {
      id: item.id,
      title: item.title,
      price: item.price,
      rating: item.rating,
      discountPercentage : item.discountPercentage
    };
    return transform;
  });

  if (!products) {
    response.status(404).json({ success: false, message: "No Products found" });
  }
  response.status(200).json({ success: true, data: products });
}

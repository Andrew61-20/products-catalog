import { Product, ProductsResponse } from "../types/Product"

const API =
  "https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products"

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(API)
  const data: ProductsResponse = await res.json()

  return data.data.products
}

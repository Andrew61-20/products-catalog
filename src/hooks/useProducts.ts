import { useEffect, useState } from "react"
import { getProducts } from "../api/productsApi"
import { Product } from "../types/Product"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  return { products, loading }
}
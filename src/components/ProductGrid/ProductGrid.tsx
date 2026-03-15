import { ProductsResponse } from "../../types/Product"
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./ProductGrid.module.css"

interface Props {
  products: ProductsResponse
}

export default function ProductGrid({ products }: Props) {
  console.log(products);
  return (
    <div className={styles.grid}>
      {products.data.products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
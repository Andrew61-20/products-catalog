import { useProducts } from "../hooks/useProducts"
import { useState } from "react"

import Header from "../components/Header"
import { ProductCard } from "../components/ProductCard/ProductCard"
import Pagination from "../components/Pagination/Pagination"

const PAGE_SIZE = 8

export default function ProductsPage() {
  const { products } = useProducts()
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("popular")
  const [page, setPage] = useState(1)

  let filtered = products?.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  ) || []

  if (sort === "popularAsc") {
    filtered = [...filtered].sort((a, b) => a.rating - b.rating)
  }

  if (sort === "popularDesc") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  }

  const start = (page - 1) * PAGE_SIZE
  const paginated = filtered.slice(start, start + PAGE_SIZE)

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)

  return (
    <div>

      <Header
        search={search}
        onSearch={setSearch}
        sort={sort}
        onSort={setSort}
        total={filtered.length}
      />

      <div className="container">
        <div className="grid">
            {paginated.map((p) => (
            <ProductCard key={p.id} product={p} />
            ))}
        </div>
        <Pagination
            page={page}
            pages={totalPages}
            onChange={setPage}
        />
        <img
            className="footer"
            src="/copyright.png"
            alt="footer"
        />
      </div>
    </div>
  )
}
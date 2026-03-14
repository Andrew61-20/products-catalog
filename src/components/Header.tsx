import { useEffect, useRef } from "react"
import "./Header.css"

interface Props {
  search: string
  onSearch: (value: string) => void
  sort: string
  onSort: (value: string) => void
  total: number
}

export default function Header({ search, onSearch, sort, onSort, total }: Props) {
  const sortRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        onSort("popular")
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [onSort])

  const handleUpClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSort("popularAsc")
  }

  const handleDownClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onSort("popularDesc")
  }

  const label =
    sort === "popularAsc"
      ? "За збільшенням рейтингу"
      : sort === "popularDesc"
      ? "За зменшенням рейтингу"
      : "За популярністю"

  return (
    <div className="container">

      <div className="logoRow">
        <img src="/aqvex.png" alt="AQVEX" className="logo" />
      </div>

      <div className="searchRow">
        <div className="searchWrapper">
          <img src="/search.svg" className="searchIcon" />

          <input
            className="search"
            placeholder="Пошук"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="sortRow">

        <div className="count">
          {total} товарів
        </div>

        <div className="sort" ref={sortRef}>

          <span className="arrows">

            <span
              className={`arrowUp ${sort === "popularAsc" ? "active" : ""}`}
              onClick={handleUpClick}
            >
              ↑
            </span>

            <span
              className={`arrowDown ${sort === "popularDesc" ? "active" : ""}`}
              onClick={handleDownClick}
            >
              ↓
            </span>

          </span>

          <span className="sortText">{label}</span>

        </div>

      </div>

    </div>
  )
}
  
import "./Pagination.css"

interface Props {
  page: number
  pages: number
  onChange: (page: number) => void
}

export default function Pagination({ page, pages, onChange }: Props) {

  const pagesArray = []

  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i)
  }

  return (
    <div className="pagination">

      <button
        className="arrow"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        ←
      </button>

      {pagesArray.map((p) => (
        <button
          key={p}
          className={p === page ? "pageButton activePage" : "pageButton"}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        className="arrow"
        onClick={() => onChange(page + 1)}
        disabled={page === pages}
      >
        →
      </button>

    </div>
  )
}
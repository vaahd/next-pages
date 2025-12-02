'use client'

import { useEffect, useState } from 'react'
import Skeleton from './Skeleton'
import ProductCard from './ProductCard'
import { Product } from '../types/product'

export default function FilterableProductList({
  serverProducts,
  categories
}: {
  serverProducts: Product[]
  categories: string[]
}) {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCat, setSelectedCat] = useState('')
  const [search, setSearch] = useState('')
  const [debounced, setDebounced] = useState('')

  useEffect(() => {
    const t = setTimeout(() => {
      setProducts(serverProducts)
      setLoading(false)
    }, 600)
    return () => clearTimeout(t)
  }, [serverProducts])

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 400)
    return () => clearTimeout(t)
  }, [search])

  const filtered = products.filter((p) => {
    const matchCat = selectedCat ? p.category === selectedCat : true
    const matchSearch = debounced
      ? p.title.toLowerCase().includes(debounced.toLowerCase())
      : true
    return matchCat && matchSearch
  })

  const showSearchSkeleton =
    !loading && search !== debounced

  return (
    <div className="container">
      <button className="btn btn-dark d-md-none mb-3 filter-btn" data-bs-toggle="offcanvas" data-bs-target="#filters">
        Filters
      </button>

      <div className="row">
        <div className="col-md-3">
          <div className="offcanvas offcanvas-start d-md-none" id="filters">
            <div className="offcanvas-header">
              <h5 className="mb-0">Filters</h5>
              <button className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body">

              <input type="text"placeholder="Search products..." value={search} className="form-control mb-3" onChange={(e) => setSearch(e.target.value)}/>
              <div className="list-group">
                <button className={`list-group-item list-group-item-action ${
                    selectedCat === '' ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCat('')}
                >
                  All
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`list-group-item list-group-item-action ${
                      selectedCat === cat ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCat(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>

          <div className="d-none d-md-block">
            <input type="text" placeholder="Search products..." value={search} className="form-control mb-3" onChange={(e) => setSearch(e.target.value)}/>
            <div className="list-group">
              <button
                className={`list-group-item list-group-item-action ${
                  selectedCat === '' ? 'active' : ''
                }`}
                onClick={() => setSelectedCat('')}
              >
                All
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`list-group-item list-group-item-action ${
                    selectedCat === cat ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        <div className="col-md-9">
          <div className="row g-4">

            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <div className="col-12 col-sm-6 col-lg-4" key={i}>
                  <Skeleton height={300} />
                </div>
              ))}

            {showSearchSkeleton &&
              Array.from({ length: 6 }).map((_, i) => (
                <div className="col-12 col-sm-6 col-lg-4" key={i}>
                  <Skeleton height={260} />
                </div>
              ))}

            {!loading &&
              !showSearchSkeleton &&
              filtered.map((p) => (
                <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}

            {!loading && !showSearchSkeleton && filtered.length === 0 && (
              <p className="text-muted">No products found.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import Skeleton from '../components/Skeleton'
import ProductCard from '../components/ProductCard'
import { Product } from '../types/product'

export default function ProductsClient({ serverProducts }: { serverProducts: Product[] }) {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const t = setTimeout(() => {
      setProducts(serverProducts)
      setLoading(false)
    }, 600)
    return () => clearTimeout(t)
  }, [serverProducts])

  if (loading) {
    return (
      <div className="row g-4 mt-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Skeleton height={300} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="row g-4 mt-3">
      {products.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  )
}
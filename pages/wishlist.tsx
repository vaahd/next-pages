'use client'

import { useWishlist } from './components/WishlistContext'
import Link from 'next/link'
import Skeleton from './components/Skeleton'
import { useEffect, useState } from 'react'

export default function WishlistPage() {
  const { wishlist, clearWishlist} = useWishlist()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])
  if (loading) {
    return (
      <div className="row g-3 mt-4 justify-content-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Skeleton height={220} />
          </div>
        ))}
      </div>
    )
  }

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-5 py-5">
        <h3>Your wishlist is empty !</h3>
        <Link href="/products" className="btn btn-success mt-3 browse">Browse Products</Link>
      </div>
    )
  }
  return (
    <div className="container-fluid px-3 px-md-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-5 py-3">
        <h3 className="text-center text-md-start mb-3 mb-md-0 mt-5">Wishlist!</h3>

        <button className="btn btn-outline-danger btn-sm mt-5" onClick={clearWishlist}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-dash mb-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
        </button>
      </div>
      <div className="row g-3 justify-content-center">
        {wishlist.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 position-relative">
              <img
                src={p.image}
                className="card-img-top"
                style={{ height: 160, objectFit: 'contain' }}
              />
              <div className="card-body">
                <h6 className="card-title text-truncate">{p.title}</h6>
                <p className="card-text">${p.price}</p>

                <Link href={`/products/${p.id}`} className="btn btn-success btn-sm w-100 browse">
                  View Product
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
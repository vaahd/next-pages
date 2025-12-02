'use client'

import { useState, useEffect } from 'react'
import { Product } from '../types/product_temp'
import { useCart } from './CartContext'
import { useWishlist } from './WishlistContext'
import Image from 'next/image'
import Skeleton from './Skeleton'
import allProducts from '../data/products.json'

export default function ProductDetailClient({ product }: { product: Product }) {
  const [qty, setQty] = useState(1)
  const [selected, setSelected] = useState(product.image)
  const [related, setRelated] = useState<Product[] | null>(null)

  const { addToCart } = useCart()
  const { wishlist, toggleWishlist } = useWishlist()

  useEffect(() => {
    const rel = allProducts
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
    setTimeout(() => setRelated(rel), 500)
  }, [product])

  const isWish = wishlist.some((w) => w.id === product.id)

  function handleAdd() {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      },
      qty
    )
  }

  return (
    <div className="container">
      <div className="row mb-4 py-5 mt-5 gy-4">
        <div className="col-12 col-md-5">
          <div className="border p-3 text-center">
            {selected ? (
              <img
                src={selected}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: 380, objectFit: 'contain' }}
              />
            ) : (
              <Skeleton height={350} />
            )}
          </div>
          <div className="d-flex flex-wrap gap-2 mt-2">

            <Image
              src={product.image} alt=''
              width={60} height={60}
              style={{ objectFit: 'contain', cursor: 'pointer' }}
              onClick={() => setSelected(product.image)}
            />

            {related === null ? (
              <>
                <Skeleton height={60} width="60px" />
                <Skeleton height={60} width="60px" />
                <Skeleton height={60} width="60px" />
              </>
            ) : (
              related.map((r) => (
                <Image
                  key={r.id}
                  src={r.image}
                  alt=''
                  width={60} height={60}
                  style={{ objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => setSelected(r.image)}
                />
              ))
            )}

          </div>
        </div>
        <div className="col-12 col-md-7">
          <h3>{product.title}</h3>
          <p className="text-muted">Category: {product.category}</p>
          <h4>${product.price.toFixed(2)}</h4>
          <p>{product.description}</p>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <button className="btn btn-primary" onClick={handleAdd}>
              Add to cart
            </button>

            <button className={"btn btn-outline-primary"} onClick={() => toggleWishlist(product)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-heart mb-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
            </button>
          </div>
          <h6>Customer reviews</h6>
          <ul>
            <li>Great product — 5/5</li>
            <li>Good value — 4/5</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h5>Related products</h5>

        <div className="row g-3 mt-2">
          {related === null ? (
            <>
              <div className="col-6 col-md-3"><Skeleton height={200} /></div>
              <div className="col-6 col-md-3"><Skeleton height={200} /></div>
              <div className="col-6 col-md-3"><Skeleton height={200} /></div>
              <div className="col-6 col-md-3"><Skeleton height={200} /></div>
            </>
          ) : related.length === 0 ? (
            <p className="text-muted">No related products found.</p>
          ) : (
            related.map((p) => (
              <div key={p.id} className="col-6 col-md-3">
                <div className="card h-100">
                  <img src={p.image} className="card-img-top" style={{ height: 140, objectFit: 'contain' }}/>
                  <div className="card-body">
                    <h6 className="card-title text-truncate">{p.title}</h6>
                    <p className="card-text">${p.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
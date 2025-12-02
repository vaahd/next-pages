'use client'

import { useCart } from './components/cartcontext_temp.tsx'
import Skeleton from './components/Skeleton'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div className="mt-4">
        <Skeleton height={80} />
        <Skeleton height={80} className="mt-3" />
        <Skeleton height={80} className="mt-3" />
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5 py-5">
        <h3>Your cart is empty !</h3>
        <Link href="/products" className="btn btn-success mt-3 browse">Shop Products</Link>
      </div>
    )
  }

  return (
    <div className="container mt-5 py-4">

      <h3 className="mb-4 mt-5">Your Cart</h3>

      {cart.map((item) => (
        <div key={item.id} className="card mb-3 p-3">
          <div className="row g-3 align-items-center">

            <div className="col-4 col-sm-3 col-md-2">
              <img 
                src={item.image} 
                className="img-fluid"
                style={{ maxHeight: "90px", objectFit: "contain" }}
              />
            </div>
            <div className="col-8 col-sm-6 col-md-8">
              <h6 className="mb-1">{item.title}</h6>
              <p className="mb-0 text-muted">
                ${item.price} × {item.quantity} = 
                <strong> ${(item.price * item.quantity).toFixed(2)}</strong>
              </p>
            </div>
            <div className="col-12 col-sm-3 col-md-2 text-sm-end mt-3 mt-sm-0">
              <button className="btn btn-danger btn-sm w-100" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>

          </div>
        </div>
      ))}

      <button className="btn btn-outline-danger mt-3" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  )
}
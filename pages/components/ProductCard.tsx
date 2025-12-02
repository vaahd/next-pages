'use client'
import Link from 'next/link'
import { Product } from '../types/product'
import { useState } from 'react'

export default function ProductCard({ product }: { product: Product }) {

  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPos({ x, y })
  }

  const toggleFlip = () => {
    if (window.innerWidth < 768) {
      setIsFlipped(prev => !prev)
    }
  }

  return (
    <div
      className={`card-3d-wrap ${isFlipped ? "flip" : ""}`}
      onMouseMove={handleMove}
      onClick={toggleFlip}
      style={{
        ['--mx' as any]: `${pos.x}%`,
        ['--my' as any]: `${pos.y}%`
      }}
    >
      <div className="card-3d">
        <div className="card-3d-face card-3d-front">

          <div className="card-3d-img-area">
            <img src={product.image} alt={product.title} className="card-3d-img"/>
          </div>

          <h6 className="card-3d-title text-center">
            {product.title}
          </h6>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <strong className="card-3d-price">${product.price.toFixed(2)}</strong>

          
          </div>

          <div className="card-3d-rim"></div>
        </div>
        <div className="card-3d-face card-3d-back">

          <h4 className="card-3d-back-title">Details</h4>

          <p className="card-3d-back-text">
            {product.description?.substring(0, 120) || "Premium quality product."}
          </p>

          <div className="card-3d-back-btns">
            <Link href={`/products/${product.id}`} className="card-3d-btn card-3d-btn-primary btn-sm" onClick={(e) => e.stopPropagation()}>
              View
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
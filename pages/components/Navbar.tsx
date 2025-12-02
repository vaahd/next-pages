'use client'
import Link from 'next/link'
import { useCart } from './CartContext'
import { useWishlist } from './WishlistContext'
import { useDarkMode } from './DarkModeContext'
import Image from 'next/image'

export default function Navbar() {
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const { dark, toggle } = useDarkMode()

  const itemCount = cart.reduce((sum, it) => sum + it.quantity, 0)
  const wishCount = wishlist.length

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
          <Image src="/logo.png" alt="Logo" width={45} height={45} style={{ objectFit: 'contain' }}/>     
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>

        
          <ul className="navbar-nav align-items-center justify-content-center gap-2">
              <li className="nav-item">
              <button className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center" onClick={toggle} aria-pressed={dark}>
                {dark ? (
                  <i className="bi bi-sun-fill" style={{ fontSize: 18 }}></i>
                ) : (
                  <i className="bi bi-moon-stars-fill" style={{ fontSize: 18 }}></i>
                )}
              </button>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link" href="/wishlist">
                <i className="bi bi-heart" style={{ fontSize: 20 }}></i>
                <span className="badge bg-warning rounded-pill position-absolute" style={{ top: 0, right: -5 }}>
                  {wishCount}
                </span>
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link" href="/cart">
                <i className="bi bi-bag" style={{ fontSize: 20 }}></i>
                <span className="badge bg-primary rounded-pill position-absolute" style={{ top: 0, right: -8 }}>
                  {itemCount}
                </span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
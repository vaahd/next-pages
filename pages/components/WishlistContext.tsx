'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Product } from '../../types/product'

type WishlistItem = { id: number; product: Product }

interface WishlistContextType {
  wishlist: Product[]
  toggleWishlist: (p: Product) => void
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('ns_wishlist')
      if (raw) setWishlist(JSON.parse(raw))
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem('ns_wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  function toggleWishlist(p: Product) {
    setWishlist(prev => {
      const exists = prev.some(x => x.id === p.id)
      if (exists) return prev.filter(x => x.id !== p.id)
      return [...prev, p]
    })
  }

  function clearWishlist() {
    setWishlist([])
  }

  return <WishlistContext.Provider value={{ wishlist, toggleWishlist, clearWishlist }}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider')
  return ctx
}

export default WishlistContext;  

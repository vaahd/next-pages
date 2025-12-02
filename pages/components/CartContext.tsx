'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type CartItem = { id: number; title: string; price: number; image: string; quantity: number }

interface CartContextType {
  cart: CartItem[]
  addToCart: (p: { id: number; title: string; price: number; image: string }, qty?: number) => void
  removeFromCart: (id: number) => void
  updateQty: (id: number, qty: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const raw = localStorage.getItem('ns_cart')
    if (raw) setCart(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('ns_cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product: { id: number; title: string; price: number; image: string }, qty = 1) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + qty } : p)
      return [...prev, { ...product, quantity: qty }]
    })
  }

  function removeFromCart(id: number) {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  function updateQty(id: number, qty: number) {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: qty } : p))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export default CartContext;  

'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext<{ dark: boolean; toggle: () => void } | undefined>(undefined)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {

  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('ns_dark')
    if (saved) {
      setDark(saved === '1')
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    localStorage.setItem('ns_dark', dark ? '1' : '0')

    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark, mounted])

  if (!mounted) return null

  return (
    <DarkModeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const ctx = useContext(DarkModeContext)
  if (!ctx) throw new Error('useDarkMode must be used inside DarkModeProvider')
  return ctx
}
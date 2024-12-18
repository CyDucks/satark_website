'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-2 rounded-full group transition-all duration-300 
        bg-orange-100 dark:bg-gray-800 
        hover:bg-orange-200 dark:hover:bg-gray-700"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-full h-full 
            text-orange-500 
            ${resolvedTheme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'} 
            transition-all duration-300`} 
        />
        <Moon 
          className={`absolute inset-0 w-full h-full 
            text-gray-600 
            ${resolvedTheme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'} 
            transition-all duration-300`} 
        />
      </div>
    </button>
  )
}
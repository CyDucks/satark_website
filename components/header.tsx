'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold text-orange-500">Satark</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation */}
        <nav className={`
          fixed inset-0 bg-white flex flex-col items-center justify-center 
          md:static md:flex md:flex-row md:bg-transparent md:space-x-6
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:translate-x-0
        `}>
          <Link 
            href="#features" 
            className="text-lg md:text-sm font-medium hover:text-orange-500 mb-6 md:mb-0"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-lg md:text-sm font-medium hover:text-orange-500 mb-6 md:mb-0"
            onClick={toggleMenu}
          >
            How It Works
          </Link>
          <Link 
            href="#download" 
            className="text-lg md:text-sm font-medium hover:text-orange-500 mb-6 md:mb-0"
            onClick={toggleMenu}
          >
            Download
          </Link>
          <button 
            className="md:hidden mt-6 text-lg font-medium text-orange-500"
            onClick={toggleMenu}
          >
            Close Menu
          </button>
        </nav>
      </div>
    </header>
  )
}
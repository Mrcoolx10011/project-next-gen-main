'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on the home page
  const isHomePage = pathname === '/'
  
  // Always show background on non-home pages
  const shouldShowBackground = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Set initial state
    setIsScrolled(window.scrollY > 50)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`nav-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowBackground 
        ? 'bg-white shadow-lg border-b border-gray-100' 
        : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
    }`} style={{ 
      backdropFilter: shouldShowBackground ? 'none' : 'blur(8px)',
      WebkitBackdropFilter: shouldShowBackground ? 'none' : 'blur(8px)'
    }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image 
            src="https://www.wsevolves.com/assets/images/logo1.png" 
            alt="WSEVOLVES Logo" 
            width={150} 
            height={40} 
            className={`object-contain transition-all duration-300 ${
              shouldShowBackground ? 'brightness-100' : 'brightness-0 invert'
            }`}
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={`transition-colors duration-300 ${
            pathname === '/' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>Home</Link>
          <Link href="/services" className={`transition-colors duration-300 ${
            pathname === '/services' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>Services</Link>
          <Link href="/projects" className={`transition-colors duration-300 ${
            pathname === '/projects' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>Projects</Link>
          <Link href="/blog" className={`transition-colors duration-300 ${
            pathname === '/blog' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>Blog</Link>
          <Link href="/about" className={`transition-colors duration-300 ${
            pathname === '/about' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>About</Link>
          <Link href="/careers" className={`transition-colors duration-300 ${
            pathname === '/careers' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>Careers</Link>
          <Link href="/contact" className={`transition-colors duration-300 ${
            pathname === '/contact' ? 'text-blue-600 font-semibold' : 
            shouldShowBackground ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
          }`}>Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          <button
            className={`md:hidden transition-colors duration-300 ${shouldShowBackground ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-white"
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
          <Link href="/" className={`${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>Home</Link>
          <Link href="/services" className={`${pathname === '/services' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>Services</Link>
          <Link href="/projects" className={`${pathname === '/projects' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>Projects</Link>
          <Link href="/blog" className={`${pathname === '/blog' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>Blog</Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>About</Link>
          <Link href="/careers" className={`${pathname === '/careers' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>Careers</Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-600'}`}>Contact</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </motion.nav>
    </header>
  )
}


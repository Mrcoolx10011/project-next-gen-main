'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import Image from 'next/image'

export default function CareersHero() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080?random=23"
          alt="Careers Hero Background"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8"
        >
          Build the future of technology with us
        </motion.p>
        <motion.form
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
        >
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full transition duration-300 flex items-center justify-center gap-2"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}


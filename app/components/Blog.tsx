'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const blogPosts = [
  { id: 1, title: 'The Future of Web Design', category: 'Design', image: 'https://picsum.photos/400/300?random=13' },
  { id: 2, title: 'Optimizing Your Website for Speed', category: 'Development', image: 'https://picsum.photos/400/300?random=14' },
  { id: 3, title: 'Effective Social Media Strategies', category: 'Marketing', image: 'https://picsum.photos/400/300?random=15' },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Blog</h2>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 sm:h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.category}</p>
                <a href="#" className="text-primary hover:underline">Read More</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


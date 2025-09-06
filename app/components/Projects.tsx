'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Project 1', category: 'web', image: 'https://picsum.photos/400/300?random=7' },
  { id: 2, title: 'Project 2', category: 'design', image: 'https://picsum.photos/400/300?random=8' },
  { id: 3, title: 'Project 3', category: 'marketing', image: 'https://picsum.photos/400/300?random=9' },
  { id: 4, title: 'Project 4', category: 'web', image: 'https://picsum.photos/400/300?random=10' },
  { id: 5, title: 'Project 5', category: 'design', image: 'https://picsum.photos/400/300?random=11' },
  { id: 6, title: 'Project 6', category: 'marketing', image: 'https://picsum.photos/400/300?random=12' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`m-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`m-2 px-4 py-2 rounded ${filter === 'web' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter('design')}
            className={`m-2 px-4 py-2 rounded ${filter === 'design' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Design
          </button>
          <button
            onClick={() => setFilter('marketing')}
            className={`m-2 px-4 py-2 rounded ${filter === 'marketing' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Marketing
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 capitalize">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}


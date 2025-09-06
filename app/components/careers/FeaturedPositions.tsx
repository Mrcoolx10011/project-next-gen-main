'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const featuredPositions = [
  { title: 'Senior Software Engineer', location: 'Remote', department: 'Engineering' },
  { title: 'UX Designer', location: 'New York, NY', department: 'Design' },
  { title: 'Product Manager', location: 'San Francisco, CA', department: 'Product' },
  { title: 'Data Scientist', location: 'Remote', department: 'Data' },
]

export default function FeaturedPositions() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Positions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{position.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{position.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{position.department}</p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition duration-300"
          >
            View All Positions
          </a>
        </div>
      </div>
    </section>
  )
}


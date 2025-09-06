'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { id: 1, name: 'Client 1', logo: 'https://picsum.photos/200/200?random=16' },
  { id: 2, name: 'Client 2', logo: 'https://picsum.photos/200/200?random=17' },
  { id: 3, name: 'Client 3', logo: 'https://picsum.photos/200/200?random=18' },
  { id: 4, name: 'Client 4', logo: 'https://picsum.photos/200/200?random=19' },
  { id: 5, name: 'Client 5', logo: 'https://picsum.photos/200/200?random=20' },
  { id: 6, name: 'Client 6', logo: 'https://picsum.photos/200/200?random=21' },
]

const testimonials = [
  { id: 1, name: 'John Doe', company: 'ABC Corp', text: 'Working with this team has been an absolute pleasure. They delivered beyond our expectations.' },
  { id: 2, name: 'Jane Smith', company: 'XYZ Inc', text: 'Their creativity and attention to detail sets them apart. Highly recommended!' },
]

export default function Clients() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={client.logo}
                  alt={client.name}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


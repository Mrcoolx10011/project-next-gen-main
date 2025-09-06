'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const lifeAtCompanyItems = [
  {
    title: 'Innovation',
    description: 'We foster a culture of innovation and creativity.',
    image: 'https://picsum.photos/seed/innovation/400/300',
  },
  {
    title: 'Work-Life Balance',
    description: 'We believe in maintaining a healthy work-life balance.',
    image: 'https://picsum.photos/seed/worklifebalance/400/300',
  },
  {
    title: 'Growth',
    description: 'We provide opportunities for personal and professional growth.',
    image: 'https://picsum.photos/seed/growth/400/300',
  },
]

export default function LifeAtCompany() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Life at WSEVOLVES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lifeAtCompanyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(item.title)}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


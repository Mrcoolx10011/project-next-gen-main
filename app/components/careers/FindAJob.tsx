'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Users } from 'lucide-react'

const jobCategories = [
  { icon: <Briefcase />, title: 'Engineering', count: 25 },
  { icon: <MapPin />, title: 'Remote', count: 15 },
  { icon: <Users />, title: 'Marketing', count: 10 },
]

export default function FindAJob() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Find a Job
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-accent mr-4">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground">{category.count} open positions</p>
              <a href="#" className="mt-4 inline-block text-primary hover:text-accent transition-colors">
                View openings
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started as a small tech consultancy with big dreams.'
  },
  {
    year: '2015',
    title: 'Major Expansion',
    description: 'Opened offices in three new locations and doubled our team size.'
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovation in IT services.'
  },
  {
    year: '2020',
    title: 'Global Reach',
    description: 'Expanded operations to serve clients worldwide.'
  },
  {
    year: '2023',
    title: 'Digital Excellence',
    description: 'Launched new AI and cloud service offerings.'
  }
]

export default function History() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12 relative"
            >
              <div className="md:w-1/4 text-center md:text-right">
                <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
              </div>
              <div className="w-px h-full bg-blue-600 absolute left-1/2 md:left-1/4 transform -translate-x-1/2 hidden md:block" />
              <div className="md:w-3/4 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import { Cpu, Sliders, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: <Cpu size={40} />,
    title: 'Cutting-edge Technology',
    description: 'We leverage the latest technologies to deliver innovative solutions that keep you ahead of the curve.'
  },
  {
    icon: <Sliders size={40} />,
    title: 'Tailored IT Solutions',
    description: 'Our custom-built solutions are designed to meet your unique business needs and challenges.'
  },
  {
    icon: <HeadphonesIcon size={40} />,
    title: 'Exceptional Customer Support',
    description: '24/7 dedicated support ensures your IT infrastructure runs smoothly, allowing you to focus on your core business.'
  }
]

export default function UniqueFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and innovation drives us to deliver outstanding results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


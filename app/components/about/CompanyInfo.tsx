'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Shield } from 'lucide-react'

const coreValues = [
  {
    icon: <Lightbulb size={32} />,
    title: 'Innovation',
    description: 'Constantly pushing boundaries and embracing new technologies'
  },
  {
    icon: <Users size={32} />,
    title: 'Teamwork',
    description: 'Collaborating to achieve exceptional results'
  },
  {
    icon: <Shield size={32} />,
    title: 'Integrity',
    description: 'Maintaining the highest standards of transparency and ethics'
  }
]

export default function CompanyInfo() {
  return (
    <section id="company-info" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-gray-600 text-lg">
              Founded in 2010, we've grown from a small tech consultancy to a full-service IT solutions provider. Our journey has been driven by a singular vision: to make cutting-edge technology accessible and beneficial for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver innovative IT solutions that empower businesses to succeed in the digital age, while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in digital transformation, recognized for our innovative solutions, exceptional service, and commitment to client success.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


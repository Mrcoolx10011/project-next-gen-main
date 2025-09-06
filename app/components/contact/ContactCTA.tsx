'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Need Immediate Assistance?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-6"
        >
          Our support team is just a phone call away.
        </motion.p>
        <motion.a
          href="tel:+15551234567"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Us at +1 (555) 123-4567
        </motion.a>
      </div>
    </section>
  )
}


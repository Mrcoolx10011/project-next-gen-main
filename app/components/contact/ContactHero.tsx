'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto"
        >
          We're here to answer any questions you have about our IT services. 
          Reach out to us and let's start a conversation about your technology needs.
        </motion.p>
      </div>
    </section>
  )
}


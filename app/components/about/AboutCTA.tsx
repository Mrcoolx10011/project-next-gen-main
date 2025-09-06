'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Explore our services, join our team, or get in touch to discuss your next project.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/services" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-100 transition-colors duration-300">
              Explore Services
            </Link>
            <Link href="/careers" className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition-colors duration-300">
              Join Our Team
            </Link>
            <Link href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


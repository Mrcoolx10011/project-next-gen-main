'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p>123 Tech Street, Silicon Valley, CA 94000</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>info@itservices.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


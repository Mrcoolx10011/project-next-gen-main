'use client'

import { motion } from 'framer-motion'
import { FileText, Users, PhoneCall, CheckCircle } from 'lucide-react'

const hiringSteps = [
  { icon: <FileText />, title: 'Application Review', description: 'We carefully review your application and resume.' },
  { icon: <Users />, title: 'Initial Interview', description: 'A brief chat to get to know you better.' },
  { icon: <PhoneCall />, title: 'Technical Interview', description: 'In-depth discussion about your skills and experience.' },
  { icon: <CheckCircle />, title: 'Final Decision', description: 'We make a decision and extend an offer if it\'s a good fit.' },
]

export default function HowWeHire() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          How We Hire
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hiringSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg"
            >
              <div className="text-accent mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


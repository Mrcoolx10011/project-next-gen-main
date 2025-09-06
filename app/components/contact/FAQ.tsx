'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What IT services do you offer?',
    answer: 'We offer a wide range of IT services including software development, cloud solutions, cybersecurity, IT consulting, and managed IT services.'
  },
  {
    question: 'How quickly can you respond to IT emergencies?',
    answer: 'We provide 24/7 emergency IT support for our clients. Our average response time for critical issues is under 1 hour.'
  },
  {
    question: 'Do you offer services for small businesses?',
    answer: 'Yes, we have tailored IT solutions for businesses of all sizes, including small and medium-sized enterprises.'
  },
  {
    question: 'Can you help with cloud migration?',
    answer: 'We specialize in cloud migration services, helping businesses seamlessly transition their operations to the cloud.'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded shadow hover:shadow-md transition-shadow"
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


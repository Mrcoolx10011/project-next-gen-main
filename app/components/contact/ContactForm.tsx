'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name *</label>
          <motion.input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email *</label>
          <motion.input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone (optional)</label>
          <motion.input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">Subject *</label>
          <motion.input
            type="text"
            id="subject"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message *</label>
          <motion.textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={4}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </motion.button>
      </form>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 p-3 bg-green-100 text-green-700 rounded"
          >
            Thank you for your message. We'll get back to you soon!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}


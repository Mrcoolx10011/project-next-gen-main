'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X, MessageCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  message: string
  captcha: string
}

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [isButtonVisible, setIsButtonVisible] = useState(false) // Added state for button visibility
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setCaptcha(result)
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true)
    }, 1000) // 1 second delay, adjust as needed

    return () => clearTimeout(timer)
  }, []) // Added useEffect for button visibility

  const onSubmit = (data: FormData) => {
    if (data.captcha === captcha) {
      console.log(data)
      // Handle form submission here
      setIsOpen(false)
      reset()
      generateCaptcha()
    } else {
      alert('CAPTCHA is incorrect. Please try again.')
    }
  }

  return (
    <>
      {isButtonVisible && ( // Conditional rendering for the button
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={24} />
          <span className="ml-2 hidden sm:inline">Inquiry Now</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Inquiry Form</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
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
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <div>
                  <label htmlFor="captcha" className="block mb-1 font-medium">CAPTCHA</label>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 p-2 rounded font-mono">{captcha}</div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Refresh
                    </button>
                  </div>
                  <input
                    type="text"
                    id="captcha"
                    {...register('captcha', { required: 'CAPTCHA is required' })}
                    className="w-full p-2 border rounded focus:ring focus:ring-blue-300 mt-2"
                  />
                  {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


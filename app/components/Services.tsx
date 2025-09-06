'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Smartphone, Apple, FileText, BarChart3, Workflow, MessageSquare } from 'lucide-react'

const services = [
  {
    icon: <Code size={48} />,
    title: 'Web Development',
    description: 'From static web pages to complex web-based applications, we utilize the latest technologies and frameworks to create visually appealing, highly functional, and user-friendly websites.',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    icon: <Smartphone size={48} />,
    title: 'Android App Development',
    description: 'We offer full-cycle Android app development services, from conceptualization to deployment on the Google Play Store, focusing on creating intuitive apps with exceptional user experience.',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    icon: <Apple size={48} />,
    title: 'iOS App Development',
    description: 'Our experienced developers are proficient in Swift and Objective-C, ensuring that your iOS app is optimized for performance and usability in the Apple ecosystem.',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    icon: <FileText size={48} />,
    title: 'CMS Development',
    description: 'We create bespoke CMS solutions across platforms like WordPress, Joomla, and Drupal, empowering you to effortlessly manage and update your website\'s content.',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    icon: <BarChart3 size={48} />,
    title: 'Salesforce Development',
    description: 'Our Salesforce development services include customization, integration, and optimization of Salesforce CRM to streamline your sales processes and enhance productivity.',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    icon: <Workflow size={48} />,
    title: 'WordPress Development',
    description: 'We specialize in creating custom WordPress themes and plugins that align with your brand identity and business goals, catering to businesses of all sizes.',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    icon: <MessageSquare size={48} />,
    title: 'AI Chatbots',
    description: 'Intelligent, responsive support systems. Our AI chatbots provide 24/7 customer service, streamline operations, and enhance user engagement across various platforms.',
    image: 'https://picsum.photos/400/300?random=7'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={`${service.title} illustration`}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <motion.div
                  className="text-blue-600 mb-4 bg-gray-100 rounded-full p-3 inline-block"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 hover:underline inline-block bg-gray-100 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


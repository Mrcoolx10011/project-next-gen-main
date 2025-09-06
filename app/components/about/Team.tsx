'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'John Smith',
    title: 'CEO & Founder',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Tech enthusiast with 15+ years of industry experience.',
    linkedin: '#',
    email: 'john@example.com'
  },
  {
    name: 'Sarah Johnson',
    title: 'CTO',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Innovation leader specializing in emerging technologies.',
    linkedin: '#',
    email: 'sarah@example.com'
  },
  {
    name: 'Michael Chen',
    title: 'Head of Engineering',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Expert in cloud architecture and scalable solutions.',
    linkedin: '#',
    email: 'michael@example.com'
  },
  {
    name: 'Emily Brown',
    title: 'Product Director',
    image: '/placeholder.svg?height=400&width=400',
    bio: 'Passionate about creating user-centric solutions.',
    linkedin: '#',
    email: 'emily@example.com'
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of experts is dedicated to delivering exceptional results and driving innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


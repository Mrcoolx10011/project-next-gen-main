'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div
      ref={ref}
      className="h-screen overflow-hidden relative flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random=22')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY
        }}
      />
      <motion.div
        className="relative z-10 text-white text-center"
        style={{ y: textY }}
      >
        <h2 className="text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-xl">Scroll to explore our wide range of offerings</p>
      </motion.div>
    </div>
  )
}


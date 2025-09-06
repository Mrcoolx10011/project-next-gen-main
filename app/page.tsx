import { Suspense } from "react"
import dynamic from "next/dynamic"
import LoadingSpinner from "./components/LoadingScreen"
import ChatbotWindow from "./components/ChatbotWindow"

// Dynamically import components with lazy loading
const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => <LoadingSpinner />,
})

const Services = dynamic(() => import("./components/Services"), {
  loading: () => <LoadingSpinner />,
})

const TechStack = dynamic(() => import("./components/TechStack"), {
  loading: () => <LoadingSpinner />,
})

const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <LoadingSpinner />,
})

const Blog = dynamic(() => import("./components/Blog"), {
  loading: () => <LoadingSpinner />,
})

const Clients = dynamic(() => import("./components/Clients"), {
  loading: () => <LoadingSpinner />,
})

const Motto = dynamic(() => import("./components/Motto"), {
  loading: () => <LoadingSpinner />,
})

const Statistics = dynamic(() => import("./components/Statistics"), {
  loading: () => <LoadingSpinner />,
})

const ParallaxSection = dynamic(() => import("./components/ParallaxSection"), {
  loading: () => <LoadingSpinner />,
})

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Statistics />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ParallaxSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Blog />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Clients />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Motto />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ChatbotWindow />
      </Suspense>
    </>
  )
}


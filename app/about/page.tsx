import { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '../components/LoadingScreen'

const AboutHero = dynamic(() => import('../components/about/AboutHero'), {
  loading: () => <LoadingSpinner />
})

const CompanyInfo = dynamic(() => import('../components/about/CompanyInfo'), {
  loading: () => <LoadingSpinner />
})

const History = dynamic(() => import('../components/about/History'), {
  loading: () => <LoadingSpinner />
})

const Team = dynamic(() => import('../components/about/Team'), {
  loading: () => <LoadingSpinner />
})

const UniqueFeatures = dynamic(() => import('../components/about/UniqueFeatures'), {
  loading: () => <LoadingSpinner />
})

const CultureGallery = dynamic(() => import('../components/about/CultureGallery'), {
  loading: () => <LoadingSpinner />
})

const AboutCTA = dynamic(() => import('../components/about/AboutCTA'), {
  loading: () => <LoadingSpinner />
})

export const metadata: Metadata = {
  title: 'About Us - Leading IT Services Company',
  description: 'Learn about our journey in digital transformation, our team of experts, and how we help businesses innovate through technology.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoadingSpinner />}>
        <AboutHero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <CompanyInfo />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <History />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Team />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <UniqueFeatures />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <CultureGallery />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <AboutCTA />
      </Suspense>
    </div>
  )
}


import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '../components/LoadingScreen'
import { Metadata } from 'next'

const CareersHero = dynamic(() => import('../components/careers/CareersHero'), {
  loading: () => <LoadingSpinner />
})

const FindAJob = dynamic(() => import('../components/careers/FindAJob'), {
  loading: () => <LoadingSpinner />
})


const LifeAtCompany = dynamic(() => import('../components/careers/LifeAtCompany'), {
    loading: () => <LoadingSpinner />
  })

const HowWeHire = dynamic(() => import('../components/careers/HowWeHire'), {
  loading: () => <LoadingSpinner />
})

const FeaturedPositions = dynamic(() => import('../components/careers/FeaturedPositions'), {
  loading: () => <LoadingSpinner />
})

export const metadata: Metadata = {
  title: 'Careers - WSEVOLVES',
  description: 'Join our team and build the future of technology. Explore career opportunities at WSEVOLVES.',
}

export default function CareersPage() {
  return (
    <div className="pt-20 bg-background text-foreground">
      <Suspense fallback={<LoadingSpinner />}>
        <CareersHero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FindAJob />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LifeAtCompany />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HowWeHire />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedPositions />
      </Suspense>
    </div>
  )
}


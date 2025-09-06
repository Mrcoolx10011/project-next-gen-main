import { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '../components/LoadingScreen'

const ContactHero = dynamic(() => import('../components/contact/ContactHero'), {
  loading: () => <LoadingSpinner />
})

const ContactForm = dynamic(() => import('../components/contact/ContactForm'), {
  loading: () => <LoadingSpinner />
})

const ContactInfo = dynamic(() => import('../components/contact/ContactInfo'), {
  loading: () => <LoadingSpinner />
})

const FAQ = dynamic(() => import('../components/contact/FAQ'), {
  loading: () => <LoadingSpinner />
})

const ContactCTA = dynamic(() => import('../components/contact/ContactCTA'), {
  loading: () => <LoadingSpinner />
})

export const metadata: Metadata = {
  title: 'Contact Us - IT Services',
  description: 'Get in touch with our IT services team. We\'re here to help with all your technology needs.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoadingSpinner />}>
        <ContactHero />
      </Suspense>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <Suspense fallback={<LoadingSpinner />}>
            <ContactForm />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <ContactInfo />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ContactCTA />
      </Suspense>
    </div>
  )
}


import './globals.css'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import LoadingSpinner from './components/LoadingScreen'

const Header = dynamic(() => import('./components/Header'), {
  loading: () => <LoadingSpinner />
})

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <LoadingSpinner />
})

const LoadingScreen = dynamic(() => import('./components/LoadingScreen'), {
  loading: () => <LoadingSpinner />
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Website',
  description: 'A comprehensive modern website with various sections and interactive features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen relative`}>
        <LoadingScreen />
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
        </Suspense>
        <main className="flex-grow bg-background text-foreground">{children}</main>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}


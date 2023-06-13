'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Providers from './components/Providers'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Rodrigues - Portfolio',
  description: 'Personal website and portfolio of Adam Rodrigues',
}

export default function RootLayout({ children }) {
  
  // Temporary workaround for an unresolved bug in nextjs where the page does not scroll to the top when navigating to a new page
  // if smooth scrolling is enabled. See https://github.com/vercel/next.js/issues/28778
  const pathname = usePathname()
  useEffect(() => {
    if (pathname.startsWith('/projects')) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            <NavBar />
            <div className='py-24 px-4 mx-auto sm:w-10/12 xl:8/12'>{children}</div>
            <Footer />
            <BackToTop />
          </Providers>
      </body>
    </html>
  )
}

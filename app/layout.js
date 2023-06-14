import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Rodrigues - Portfolio',
  description: 'Personal website and portfolio of Adam Rodrigues',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            <NavBar />
            <div className='py-24 px-4 mx-auto sm:w-10/12 xl:w-8/12'>{children}</div>
            <Footer />
            <BackToTop />
          </Providers>
      </body>
    </html>
  )
}

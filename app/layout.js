import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import Providers from './Providers'

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
            <div >{children}</div>
          </Providers>
      </body>
    </html>
  )
}

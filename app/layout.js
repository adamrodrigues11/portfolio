import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './nav'
import ClientProviders from './ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Rodrigues - Portfolio',
  description: 'Personal website and portfolio of Adam Rodrigues',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ClientProviders>
            <Nav />
            <div >{children}</div>
          </ClientProviders>
      </body>
    </html>
  )
}

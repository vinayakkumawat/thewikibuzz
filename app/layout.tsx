import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wikibuzz - What I Know Is Buzz',
  description: 'Experience the buzz of innovation as you navigate a toolkit that adapts to your needs. Elevate your projects with Wikibuzz, Where Tools Meet Transformation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

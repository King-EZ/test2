import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curtis@123websupport.nl',
  description: 'Jouw Digitale Partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html smooth-scroll lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

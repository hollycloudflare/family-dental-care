import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Family Dental Care - Professional Dental Services in București',
  description: 'Professional, caring dental services for the whole family. Located at Strada Maria Rosetti 26A, București. Call 0820.123.123 to make an appointment.',
  keywords: 'dentist, dental care, family dentist, București, teeth cleaning, dental implants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

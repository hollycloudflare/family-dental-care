'use client'

import { Phone } from 'lucide-react'

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white py-4 px-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <span className="font-medium text-center sm:text-left">Call to make an appointment</span>
        <a 
          href="tel:0820123123" 
          className="flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full hover:bg-accent-light transition-colors font-bold"
        >
          <Phone size={20} />
          <span>0820.123.123</span>
        </a>
      </div>
    </div>
  )
}

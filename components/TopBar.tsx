'use client'

import { Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <a href="tel:0820123123" className="flex items-center gap-1 hover:text-accent-light transition-colors">
            <Phone size={16} />
            <span>0820.123.123</span>
          </a>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>4 Tampines Central 5, Singapore 529510</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

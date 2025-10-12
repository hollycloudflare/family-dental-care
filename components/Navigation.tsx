'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            Family Dental Care
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </button>
            <a href="/emergency-care" className="text-red-600 hover:text-red-700 transition-colors font-semibold">
              Emergency Care
            </a>
            <button 
              onClick={() => scrollToSection('home')}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors font-medium"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium text-left">
                Contact
              </button>
              <a href="/emergency-care" className="text-red-600 hover:text-red-700 transition-colors font-semibold text-left">
                Emergency Care
              </a>
              <button 
                onClick={() => scrollToSection('home')}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors font-medium text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

'use client'

import { Smile, Sparkles, Stethoscope, Heart, Scissors, Baby, AlertCircle, Shield } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkup & Cleaning',
    description: 'Comprehensive dental examination and professional teeth cleaning to maintain optimal oral health.',
    price: '$80 SGD'
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatment for a brighter, more confident smile.',
    price: '$350 SGD'
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solution that looks and functions like natural teeth.',
    price: 'From $2,500 SGD'
  },
  {
    icon: Heart,
    title: 'Root Canal Treatment',
    description: 'Save infected teeth with our gentle and effective root canal therapy.',
    price: '$800 SGD'
  },
  {
    icon: Scissors,
    title: 'Orthodontics (Braces)',
    description: 'Straighten your teeth with modern orthodontic solutions including traditional and clear braces.',
    price: 'From $4,500 SGD'
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and other cosmetic procedures.',
    price: 'From $1,200 SGD'
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly and comfortable environment.',
    price: '$60 SGD'
  },
  {
    icon: AlertCircle,
    title: 'Emergency Dental Care',
    description: 'Immediate care for dental emergencies, available when you need us most.',
    price: '$150 SGD'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care services for the entire family, delivered with expertise and compassion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-primary text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-blue-100">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which service you need? We're here to help!
          </p>
          <a
            href="tel:0820123123"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Call for Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

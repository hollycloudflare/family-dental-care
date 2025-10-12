'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Popescu',
    image: '/filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg',
    rating: 5,
    text: 'Exceptional service! The staff is incredibly professional and caring. My children actually look forward to their dental visits now. Highly recommend Family Dental Care!'
  },
  {
    name: 'Alexandru Ionescu',
    image: '/jonathan-borba-hl6uG9cHW5A-unsplash.jpg',
    rating: 5,
    text: 'I had a dental emergency and they accommodated me immediately. The treatment was painless and the results are amazing. Thank you for taking such good care of me!'
  },
  {
    name: 'Elena Dumitrescu',
    image: '/filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg',
    rating: 5,
    text: 'Best dental experience I\'ve ever had. The clinic is modern, clean, and the team is wonderful. My smile has never looked better after the cosmetic treatment!'
  },
  {
    name: 'Andrei Stanescu',
    image: '/jonathan-borba-hl6uG9cHW5A-unsplash.jpg',
    rating: 5,
    text: 'Professional, friendly, and efficient. They explained everything clearly and made sure I was comfortable throughout the procedure. Five stars all the way!'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 to-mint-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied patients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Patient Info */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#1E40AF" className="text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 text-sm">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-600 text-sm">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

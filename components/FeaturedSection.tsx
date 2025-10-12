'use client'

import Image from 'next/image'

export default function FeaturedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modern Dental Care Facility
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience dental care in our state-of-the-art clinic with the latest technology and a comfortable environment
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/atikah-akhtar-XJptUS8nbhs-unsplash.jpg"
              alt="Modern dental clinic"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Modern Equipment</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/candid-WFsNCIn8OF4-unsplash.jpg"
              alt="Professional dental care"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Expert Care</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/caroline-lm--m-4tYmtLlI-unsplash.jpg"
              alt="Comfortable dental environment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Comfortable Environment</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to experience the difference?</p>
          <a
            href="tel:0820123123"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Schedule Your Visit Today
          </a>
        </div>
      </div>
    </section>
  )
}

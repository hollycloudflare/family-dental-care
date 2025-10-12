'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're conveniently located at Tampines Central. Come visit us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      4 Tampines Central 5<br />
                      Singapore 529510
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:0820123123" className="text-primary hover:text-primary-dark transition-colors">
                      0820.123.123
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:contact@familydentalcare.ro" className="text-primary hover:text-primary-dark transition-colors">
                      contact@familydentalcare.ro
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Emergency Dental Care</h4>
              <p className="text-gray-600">
                For dental emergencies outside of regular hours, please call our emergency line. We're here to help when you need us most.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7618245!2d103.9394!3d1.3527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d4f0e5e7c3d%3A0x4e1f9e1f9e1f9e1f!2s4%20Tampines%20Central%205%2C%20Singapore%20529510!5e0!3m2!1sen!2ssg!4v1697123456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Family Dental Care Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

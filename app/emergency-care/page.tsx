import TopBar from '@/components/TopBar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyBottomBar from '@/components/StickyBottomBar'
import { AlertCircle, Phone, Clock, MapPin } from 'lucide-react'

export default function EmergencyCarePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <AlertCircle className="text-red-600" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Emergency Dental Care
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Immediate treatment for urgent dental situations. We're here when you need us most.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:0820123123"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors text-lg"
              >
                <Phone size={24} />
                Call Emergency Line: 0820.123.123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-mint-50 border-l-4 border-pink-400 p-6 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Emergency Dental Services?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Emergency dental services provide immediate treatment for sudden and severe oral health issues like severe toothaches, knocked-out teeth, broken teeth, and dental abscesses or infections. These services are crucial to relieve pain, stop bleeding, save a tooth, and prevent life-threatening complications from spreading infections.
              </p>
              
              {/* Emergency Services Image */}
              <div className="w-full rounded-lg overflow-hidden mt-6">
                <img
                  src="https://pub-5d8d123f40ca4253a52ba12f2a715ff2.r2.dev/emergency/ozkan-guner-rRgjO2Y1g1E-unsplash.jpg"
                  alt="Emergency Dental Services"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>

            {/* Types of Emergencies */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Dental Emergencies</h2>
            
            <div className="space-y-6">
              {/* Severe Toothache */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Severe Toothache</h3>
                <p className="text-gray-600 leading-relaxed">
                  Caused by decay, infection, or gum disease, leading to excruciating pain that interferes with sleep or concentration.
                </p>
              </div>

              {/* Knocked-out Tooth */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knocked-Out Tooth</h3>
                <p className="text-gray-600 leading-relaxed">
                  A tooth that has been completely dislodged due to a fall, accident, or sports injury. Immediate care is needed to save the tooth.
                </p>
              </div>

              {/* Broken or Chipped Tooth */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Broken or Chipped Tooth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Can occur from accidents or from chewing hard foods.
                </p>
              </div>

              {/* Dental Abscess */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dental Abscess</h3>
                <p className="text-gray-600 leading-relaxed">
                  A pocket of pus that forms due to a bacterial infection. It can cause severe pain and swelling and requires immediate treatment to prevent the infection from spreading.
                </p>
              </div>

              {/* Traumatic Injuries */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traumatic Injuries</h3>
                <p className="text-gray-600 leading-relaxed">
                  Injuries to the soft tissues of the mouth, such as cuts to the gums, lips, or tongue.
                </p>
              </div>

              {/* Uncontrolled Bleeding */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uncontrolled Bleeding</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bleeding from the mouth that does not stop.
                </p>
              </div>

              {/* Facial Swelling */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Facial Swelling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Swelling of the gums, cheek, or face due to an infection that may be spreading and could become life-threatening if not addressed quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Do in a Dental Emergency</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-red-600">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Stay Calm</h3>
                <p className="text-gray-600 text-sm">Take a deep breath and assess the situation</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-red-600">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Call Us Immediately</h3>
                <p className="text-gray-600 text-sm">Contact our emergency line right away</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-red-600">3</span>
                </div>
                <p className="text-gray-600 text-sm">Our team will guide you on next steps</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Emergency Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Phone className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <a href="tel:0820123123" className="hover:underline">0820.123.123</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Available</div>
                    <div>24/7 Emergency Care</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div>4 Tampines Central 5<br />Singapore 529510</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Care Pricing</h2>
            <div className="bg-mint-50 rounded-2xl p-8 inline-block">
              <div className="text-5xl font-bold text-primary mb-2">$150 SGD</div>
              <p className="text-gray-600">Initial Emergency Consultation</p>
              <p className="text-sm text-gray-500 mt-2">Additional treatment costs will be discussed based on your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
    </main>
  )
}

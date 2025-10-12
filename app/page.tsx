import TopBar from '@/components/TopBar'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturedSection from '@/components/FeaturedSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import StickyBottomBar from '@/components/StickyBottomBar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navigation />
      <HeroSection />
      <FeaturedSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <StickyBottomBar />
    </main>
  )
}

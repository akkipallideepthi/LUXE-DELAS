import PromoBanner from '../components/promoBanner'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FlashDeals from '../components/FlashDeals'
import CategorySection from '../components/CategorySection'
import TrendingSection from '../components/TrendingSection'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-14 md:pb-0">
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <FlashDeals />
      <CategorySection />
      <TrendingSection />
      <Newsletter />
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

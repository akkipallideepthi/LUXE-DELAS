import PromoBanner from '../components/promoBanner'
import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import GalleryHeader from '../components/GalleryHeader'
import SidebarFilter from '../components/SidebarFilter'
import CatalogGrid from '../components/CatalogGrid'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import data from '../data/data.json'

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Electronics' }]

export default function ProductGalleryPage() {
  return (
    <div className="min-h-screen bg-white pb-14 md:pb-0">
      <PromoBanner />
      <Navbar />
      <Breadcrumbs items={BREADCRUMBS} />
      <GalleryHeader count={data.products.length} />
      <div className="px-[16px] md:px-[24px] xl:px-[80px] pb-20 md:pb-[48px] xl:pb-20 flex gap-[16px] xl:gap-8">
        <SidebarFilter filters={data.filters} />
        <CatalogGrid products={data.products} />
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

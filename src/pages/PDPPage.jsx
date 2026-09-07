import PromoBanner from '../components/promoBanner'
import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import PDPGallery from '../components/PDPGallery'
import PDPProductInfo from '../components/PDPProductInfo'
import StickyDockCTA from '../components/StickyDockCTA'
import PDPSpecsTabs from '../components/PDPSpecsTabs'
import YouMayAlsoLike from '../components/YouMayAlsoLike'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import data from '../data/data.json'

export default function PDPPage() {
  const { productDetail: product, youMayAlsoLike: related } = data
  const breadcrumbs = product.breadcrumb.map((label, i, arr) => ({
    label,
    href: i < arr.length - 1 ? (i === 0 ? '/' : '#') : undefined,
  }))

  return (
    <div className="min-h-screen bg-white pb-[65px] md:pb-0">
      <PromoBanner />
      <Navbar />
      <Breadcrumbs items={breadcrumbs} />
      <div className="flex flex-col md:px-[24px] md:pt-[16px] md:pb-[48px] md:gap-[32px] xl:flex-row xl:px-[80px] xl:pt-[24px] xl:pb-[64px] xl:gap-[48px]">
        <PDPGallery />
        <PDPProductInfo product={product} />
      </div>
      <StickyDockCTA product={product} />
      <div className="hidden md:block">
        <PDPSpecsTabs product={product} />
        <YouMayAlsoLike items={related} />
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

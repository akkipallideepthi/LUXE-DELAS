import { Link } from 'react-router-dom'
import { ChevronRightIcon, StarFilledIcon, StarIcon, ImageIcon } from '@radix-ui/react-icons'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
        s <= Math.round(rating)
          ? <StarFilledIcon key={s} className="w-3 h-3 text-yellow-400" />
          : <StarIcon key={s} className="w-3 h-3 text-gray-300" />
      )}
    </div>
  )
}

function RelatedCard({ item }) {
  const discount = Math.round((1 - item.price / item.originalPrice) * 100)
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition-shadow md:w-[220px] md:h-[320px] md:shrink-0 xl:w-auto xl:h-[405px] xl:shrink">
      <div className="relative bg-gray-100 h-40 xl:h-[240px] rounded-lg flex items-center justify-center flex-shrink-0">
        <ImageIcon className="w-14 h-14 text-gray-300" />
        <span className="absolute top-2 left-2 bg-[#FF4500] text-white text-[10px] font-bold px-2 py-0.5 rounded">-{discount}%</span>
        {item.badge && (
          <span className="absolute top-2 right-2 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">{item.badge}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-start gap-2">
          <p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">{item.name}</p>
          {/* Tablet cart icon button beside name */}
          <button className="hidden md:flex xl:hidden w-8 h-8 bg-gray-900 hover:bg-black text-white rounded-lg items-center justify-center shrink-0 transition-colors">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </button>
        </div>
        <Stars rating={item.rating} />
        <div className="flex items-center gap-2">
          <span className="text-[#FF4500] font-bold">${item.price}</span>
          <span className="text-gray-400 line-through text-xs">${item.originalPrice}</span>
        </div>
      </div>
      {/* Mobile and Desktop full-width button. Hidden on tablet */}
      <button className="flex md:hidden xl:flex w-full h-10 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors items-center justify-center">
        Quick Add
      </button>
    </div>
  )
}

export default function YouMayAlsoLike({ items }) {
  return (
    <section className="md:pt-[40px] md:pb-[40px] xl:px-[80px] xl:py-16 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[20px] xl:gap-8">
        <div className="flex items-center justify-between md:px-[24px] xl:px-0">
          <h2 className="text-xl font-bold text-gray-900">You May Also Like</h2>
          <Link to="/products" className="text-sm font-medium text-[#FF4500] hover:underline flex items-center gap-1">
            View All Recommendations <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
        {/* Tablet: horizontal scroll row. Desktop: 4-col grid */}
        <div className="md:flex md:gap-[16px] md:pl-[24px] md:overflow-x-auto md:pb-2 xl:grid xl:grid-cols-4 xl:gap-6 xl:pl-0 xl:overflow-visible xl:pb-0">
          {items.map((item) => <RelatedCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}

import { useNavigate } from 'react-router-dom'
import { TimerIcon, ChevronRightIcon, StarFilledIcon, StarIcon, ImageIcon } from '@radix-ui/react-icons'
import data from '../data/data.json'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
        s <= Math.round(rating)
          ? <StarFilledIcon key={s} className="w-3 h-3 text-yellow-400" />
          : <StarIcon key={s} className="w-3 h-3 text-gray-300" />
      )}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  )
}

export default function FlashDeals() {
  const navigate = useNavigate()
  const { items } = data.flashDeals

  return (
    // Section: tablet py-40px pl-24px (no right pad — scroll bleeds) / desktop py-56px px-80px
    <section className="bg-white py-[24px] pl-[16px] xl:py-[56px] xl:px-[80px] flex flex-col gap-[16px] xl:gap-[32px]">

      {/* Section header: tablet 744 Fill × 24 Hug / desktop 1280 Fill × 29 Hug */}
      <div className="flex items-center justify-between h-[24px] xl:h-[29px] pr-[16px] xl:pr-0">
        <div className="flex items-center gap-3">
          <h2 className="text-[18px] xl:text-xl font-bold text-gray-900">Flash Deals</h2>
          <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 rounded-full px-3 py-1">
            <TimerIcon className="w-3.5 h-3.5 text-[#FF4500]" />
            <span className="text-[#FF4500] text-xs font-bold uppercase tracking-wide">Ending Soon</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/products')}
          className="text-[#FF4500] text-sm font-medium hover:underline flex items-center gap-1"
        >
          View All
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Cards: tablet = horizontal scroll (260×320 fixed) / desktop = flex row (flex-1 × 333) */}
      <div className="flex gap-[12px] overflow-x-auto xl:overflow-x-visible pb-2 xl:pb-0 pr-[16px] xl:pr-0 scrollbar-hide">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[180px] shrink-0 xl:flex-1 xl:w-auto xl:h-[333px]
                       border border-gray-200 rounded-[8px] xl:rounded-[12px] p-[8px] xl:p-[12px] flex flex-col gap-[8px] xl:gap-[12px]
                       hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Image panel: tablet 140px / desktop 160px */}
            <div className="relative w-full h-[130px] xl:h-[160px] bg-gray-100 rounded-[8px] flex items-center justify-center shrink-0">
              <ImageIcon className="w-10 h-10 text-gray-300" />
              <span className="absolute top-2 left-2 bg-[#FF4500] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {item.discount}
              </span>
            </div>

            {/* Deal details: 81px Hug tablet / 89px desktop, gap-6px */}
            <div className="w-full flex flex-col gap-[6px]">
              <p className="text-[12px] xl:text-sm font-semibold text-gray-900 leading-snug line-clamp-2">{item.name}</p>
              <Stars rating={item.rating} />
              <div className="flex items-center gap-2">
                <span className="text-[#FF4500] font-bold text-sm">${item.price}</span>
                <span className="text-gray-400 line-through text-xs">${item.originalPrice}</span>
              </div>
              <p className="text-[#FF4500] text-xs font-medium">Save ${item.save}</p>
            </div>

            {/* Cart button: tablet 31px (py-8px) / desktop 36px (py-10px) */}
            <button className="hidden xl:block w-full bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-[6px] py-[10px] transition-colors mt-auto">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </section>
  )
}

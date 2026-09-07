import { useState } from 'react'
import { StarFilledIcon, StarIcon, ImageIcon } from '@radix-ui/react-icons'
import data from '../data/data.json'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
        s <= Math.round(rating)
          ? <StarFilledIcon key={s} className="w-3 h-3 text-yellow-400" />
          : <StarIcon key={s} className="w-3 h-3 text-gray-300" />
      )}
      <span className="text-xs text-gray-500 ml-0.5">({rating})</span>
    </div>
  )
}

export default function TrendingSection() {
  const [activeTab, setActiveTab] = useState('Most Popular')
  const products = data.trendingProducts

  return (
    // Section: tablet py-40px px-24px gap-24px / desktop py-56px px-80px gap-32px
    <section className="bg-white py-[24px] px-[16px] md:py-[40px] md:px-[24px] xl:py-[56px] xl:px-[80px] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[16px] xl:gap-8">

        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] xl:text-xl font-bold text-gray-900">Trending Products</h2>
          <div className="flex items-center gap-2">
            {['Most Popular', 'New Arrivals'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors font-medium ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid: 2 cols (352px cards) tablet / 4 cols desktop */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[12px] md:gap-[16px] xl:gap-6">
          {products.map((item) => {
            const discount = Math.round((1 - item.price / item.originalPrice) * 100)
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-[8px] md:rounded-[12px] xl:rounded-[12px] p-[8px] md:p-[12px] xl:p-[12px] flex flex-col gap-[8px] md:gap-[12px] xl:gap-[12px] hover:shadow-md transition-shadow"
              >
                {/* Image panel: 160px tablet / 240px desktop */}
                <div className="relative bg-gray-100 h-[130px] md:h-[185px] xl:h-[240px] rounded-[6px] xl:rounded-[8px] flex items-center justify-center shrink-0">
                  <ImageIcon className="w-14 h-14 text-gray-300" />
                  <span className="absolute top-2 left-2 bg-[#FF4500] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    -{discount}%
                  </span>
                  {item.badge && (
                    <span className="absolute bottom-2 left-2 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Deal details: gap-6px */}
                <div className="flex flex-col gap-[6px] flex-1">
                  <p className="text-[12px] xl:text-sm font-semibold text-gray-900 leading-snug">{item.name}</p>
                  <Stars rating={item.rating} />
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[#FF4500] font-bold text-sm">${item.price}</span>
                    <span className="text-gray-400 line-through text-xs">${item.originalPrice}</span>
                    <span className="text-[#FF4500] text-xs font-medium">Save ${item.originalPrice - item.price}</span>
                  </div>
                </div>

                {/* Add to Cart: 31px tablet (py-8px) / 40px desktop */}
                <button className="hidden md:block w-full bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-[6px] py-[8px] xl:py-[10px] transition-colors">
                  Add to Cart
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

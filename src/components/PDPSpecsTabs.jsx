import { useState } from 'react'
import { StarFilledIcon, StarIcon, CheckCircledIcon } from '@radix-ui/react-icons'

const TABS = ['Description & Key Features', 'Specifications', 'Customer Reviews']

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

export default function PDPSpecsTabs({ product }) {
  const [activeTab, setActiveTab] = useState('Description & Key Features')

  return (
    <section className="px-4 xl:px-[80px] py-16 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

        <div className="flex gap-8 border-b border-gray-200">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold border-b-2 -mb-px transition-colors flex items-center gap-1.5 ${
                activeTab === tab ? 'border-[#FF4500] text-[#FF4500]' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {tab === 'Customer Reviews' && (
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${activeTab === tab ? 'bg-[#FF45001A] text-[#FF4500]' : 'bg-gray-100 text-gray-400'}`}>
                  {product.reviews >= 1000 ? `${(product.reviews / 1000).toFixed(1)}k` : product.reviews}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 max-w-[1280px]">

          {activeTab === 'Description & Key Features' && (
            <div className="flex flex-col gap-6">
              <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
              <ul className="flex flex-col gap-4">
                {product.features.map((f, i) => {
                  const colonIdx = f.indexOf(':')
                  const label = colonIdx !== -1 ? f.slice(0, colonIdx) : null
                  const rest = colonIdx !== -1 ? f.slice(colonIdx + 1) : f
                  return (
                    <li key={i} className="flex gap-3 text-gray-600 text-sm">
                      <CheckCircledIcon className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span>
                        {label && <strong className="font-semibold text-gray-900">{label}:</strong>}
                        {rest}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {activeTab === 'Specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="flex flex-col gap-1 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{key}</span>
                  <span className="text-sm text-gray-900 font-medium">{val}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Customer Reviews' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-gray-900">{product.rating}</span>
                <div className="flex flex-col gap-1">
                  <Stars rating={product.rating} />
                  <span className="text-sm text-gray-500">{product.reviews.toLocaleString()} reviews</span>
                </div>
              </div>
              {product.customerReviews.map((rev) => (
                <div key={rev.id} className="flex flex-col gap-2 pb-6 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
                      {rev.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{rev.name}</p>
                      <p className="text-xs text-gray-400">{rev.date}</p>
                    </div>
                    <Stars rating={rev.rating} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

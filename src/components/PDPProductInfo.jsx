import { useState } from 'react'
import { StarFilledIcon, StarIcon, CheckCircledIcon, RocketIcon } from '@radix-ui/react-icons'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
        s <= Math.round(rating)
          ? <StarFilledIcon key={s} className="w-4 h-4 text-yellow-400" />
          : <StarIcon key={s} className="w-4 h-4 text-gray-300" />
      )}
    </div>
  )
}

export default function PDPProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].hex)
  const [qty, setQty] = useState(1)

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)
  const savings = product.originalPrice - product.price

  return (
    <div className="flex flex-col gap-[20px] xl:gap-6 px-[16px] md:px-0 pb-[32px] md:pb-0 xl:w-[552px] xl:flex-none">

      {/* title-block: gap-6px */}
      <div className="flex flex-col gap-[6px] md:gap-3">
        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{product.brand}</span>
        <h1 className="text-2xl xl:text-[28px] font-bold text-gray-900 leading-snug">{product.name}</h1>
        {/* rating-row: gap-12px, pt-4px */}
        <div className="flex items-center gap-[12px] xl:gap-2 pt-[4px] xl:pt-0">
          <Stars rating={product.rating} />
          <span className="text-sm font-semibold text-gray-700">({product.rating})</span>
          <span className="text-gray-300 text-sm">|</span>
          <span className="text-sm font-medium text-[#FF4500]">{product.reviews.toLocaleString()} Reviews</span>
        </div>
      </div>

      {/* price-block: gap-6px */}
      <div className="flex flex-col gap-[6px] xl:gap-2">
        {/* price-row: gap-12px */}
        <div className="flex items-baseline gap-[12px]">
          <span className="text-3xl font-black text-[#FF4500]">${product.price}</span>
          <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
          <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">SAVE ${savings}</span>
        </div>
        {/* tax-info: 11px */}
        <p className="text-[11px] xl:text-sm text-gray-500">Free shipping and import duties included</p>
      </div>

      {/* tier-discount: border-radius-6px, padding-12px, gap-8px */}
      <div className="flex items-center gap-[8px] xl:gap-2.5 bg-[#F9FAFB] border border-[#FF450030] rounded-[6px] xl:rounded-lg p-[12px] xl:px-4 xl:py-3">
        <span className="text-[#FF4500] text-xl font-bold shrink-0">%</span>
        <p className="text-sm">
          <span className="font-bold text-gray-900">Volume Pricing: </span>
          <span className="text-[#FF4500]">Buy 2, Save 10%</span>
        </p>
      </div>

      {/* color-variant: gap-10px */}
      <div className="flex flex-col gap-[10px] xl:gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">Color:</span>
          <span className="text-sm text-gray-600">{product.colors.find((c) => c.hex === selectedColor)?.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {product.colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => setSelectedColor(c.hex)}
              style={{ backgroundColor: c.hex }}
              title={c.name}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === c.hex ? 'border-[#FF4500] scale-110' : 'border-gray-300 hover:border-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* stock-alert: gap-6px */}
      <div className="flex items-center gap-[6px] xl:gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#FF4500] shrink-0">
          <path d="M12 2L2 19h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
          <line x1="12" y1="9" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="17" r="1" fill="currentColor"/>
        </svg>
        <span className="text-sm text-[#FF4500] font-medium">Only 3 left in stock — order soon</span>
      </div>

      {/* description-section: mobile only, pt-12px, gap-8px */}
      <div className="md:hidden flex flex-col gap-[8px] pt-[12px]">
        <h3 className="text-sm font-bold text-gray-900">Description</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* quantity + Add to Cart + Buy It Now: desktop only */}
      <div className="hidden md:flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="flex items-center border border-gray-200 rounded-lg h-12 shrink-0">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 text-lg transition-colors">−</button>
            <span className="w-10 text-center text-sm font-semibold text-gray-900">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 text-lg transition-colors">+</button>
          </div>
          <button className="flex-1 h-12 bg-[#FF4500] hover:bg-[#e03d00] text-white font-semibold rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
        <button className="w-full h-12 border border-gray-300 hover:border-gray-500 text-gray-900 font-semibold rounded-lg transition-colors">
          Buy It Now
        </button>
      </div>

      {/* shipping/returns: desktop only */}
      <div className="hidden md:flex flex-col gap-3 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2.5 text-sm text-gray-600">
          <RocketIcon className="w-4 h-4 text-[#FF4500] shrink-0" />
          {product.shipping}
        </div>
        <div className="flex items-center gap-2.5 text-sm text-gray-600">
          <CheckCircledIcon className="w-4 h-4 text-[#FF4500] shrink-0" />
          {product.returns}
        </div>
      </div>

    </div>
  )
}

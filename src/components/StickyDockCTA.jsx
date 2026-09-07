import { ImageIcon } from '@radix-ui/react-icons'

export default function StickyDockCTA({ product }) {
  return (
    <>
      {/* Mobile: fixed bar above bottom nav */}
      <div className="flex md:hidden h-[64px] py-[12px] px-[16px] bg-[#111827] border-t border-gray-700 items-center justify-between">
        <div className="flex flex-col gap-[2px]">
          <span className="text-[#FF4500] font-bold text-[18px] leading-tight">${product.price}.00</span>
          <span className="text-gray-400 line-through text-[12px]">${product.originalPrice}.99</span>
        </div>
        <button className="w-[130px] h-[40px] bg-[#FF4500] hover:bg-[#e03d00] text-white font-semibold px-[28px] rounded-[6px] text-sm transition-colors whitespace-nowrap flex items-center justify-center">
          Add to Cart
        </button>
      </div>

      {/* Desktop: inline bar */}
      <div className="hidden md:flex w-full h-[72px] bg-[#111827] border-t border-gray-700 items-center justify-between px-[24px] xl:px-[80px] overflow-hidden">
        {/* Left: thumbnail + name + color */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center shrink-0">
            <ImageIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold leading-tight max-w-[320px] truncate">{product.name}</p>
            <p className="text-gray-400 text-xs">Color: {product.colors[0].name}</p>
          </div>
        </div>

        {/* Right: price + Add to Cart */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-baseline gap-2">
            <span className="text-[#FF4500] font-bold text-xl">${product.price}.00</span>
            <span className="text-gray-500 line-through text-sm">${product.originalPrice}.99</span>
          </div>
          <button className="bg-[#FF4500] hover:bg-[#e03d00] text-white font-semibold px-8 h-10 rounded-lg text-sm transition-colors whitespace-nowrap">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

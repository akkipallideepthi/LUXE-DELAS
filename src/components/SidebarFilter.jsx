import { useState } from 'react'
import { ChevronRightIcon, StarFilledIcon, StarIcon } from '@radix-ui/react-icons'

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) =>
        s <= count
          ? <StarFilledIcon key={s} className="w-3 h-3 text-yellow-400" />
          : <StarIcon key={s} className="w-3 h-3 text-gray-300" />
      )}
    </div>
  )
}

function FilterSection({ title, children }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">{title}</span>
        <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400 rotate-90" />
      </div>
      {children}
    </div>
  )
}

export default function SidebarFilter({ filters }) {
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedRating, setSelectedRating] = useState(null)
  const [selectedDiscounts, setSelectedDiscounts] = useState([])
  const [selectedColors, setSelectedColors] = useState([])

  function toggle(setter, value) {
    setter((prev) => prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value])
  }

  return (
    <aside className="hidden xl:flex flex-col gap-6 w-[280px] shrink-0 border border-gray-200 rounded-xl p-5 h-fit">

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900">Filters</span>
        <button
          onClick={() => { setSelectedBrands([]); setSelectedRating(null); setSelectedDiscounts([]); setSelectedColors([]) }}
          className="text-xs text-[#FF4500] font-medium hover:underline"
        >
          Clear All
        </button>
      </div>

      <FilterSection title="Price Range">
        <div className="flex flex-col gap-3">
          <div className="relative h-1 bg-gray-200 rounded-full">
            <div className="absolute left-0 w-2/3 h-full bg-[#FF4500] rounded-full" />
            <div className="absolute left-[calc(66.6%-6px)] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#FF4500] rounded-full" />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>${filters.priceRange.min}</span>
            <span>${filters.priceRange.max}</span>
          </div>
        </div>
      </FilterSection>

      <div className="w-full h-px bg-gray-100" />

      <FilterSection title="Discount">
        <div className="flex flex-col gap-2.5">
          {filters.discountRanges.map((d) => (
            <label key={d} className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={selectedDiscounts.includes(d)} onChange={() => toggle(setSelectedDiscounts, d)} className="w-4 h-4 rounded border-gray-300 accent-[#FF4500]" />
              <span className="text-sm text-gray-600">{d}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <div className="w-full h-px bg-gray-100" />

      <FilterSection title="Brand">
        <div className="flex flex-col gap-2.5">
          {filters.brands.map((b) => (
            <label key={b} className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={selectedBrands.includes(b)} onChange={() => toggle(setSelectedBrands, b)} className="w-4 h-4 rounded border-gray-300 accent-[#FF4500]" />
              <span className="text-sm text-gray-600">{b}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <div className="w-full h-px bg-gray-100" />

      <FilterSection title="Rating">
        <div className="flex flex-col gap-2.5">
          {filters.ratings.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRating(selectedRating === r ? null : r)}
              className={`flex items-center gap-2 text-sm text-left ${selectedRating === r ? 'text-[#FF4500]' : 'text-gray-600'}`}
            >
              <Stars count={r} />
              <span>& Above</span>
            </button>
          ))}
        </div>
      </FilterSection>

      <div className="w-full h-px bg-gray-100" />

      <FilterSection title="Color">
        <div className="flex items-center gap-2 flex-wrap">
          {filters.colors.map((c) => (
            <button
              key={c}
              onClick={() => toggle(setSelectedColors, c)}
              style={{ backgroundColor: c }}
              className={`w-7 h-7 rounded-full border-2 transition-all ${selectedColors.includes(c) ? 'border-[#FF4500] scale-110' : 'border-gray-200 hover:border-gray-400'}`}
            />
          ))}
        </div>
      </FilterSection>

    </aside>
  )
}

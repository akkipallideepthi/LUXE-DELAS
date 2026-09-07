import { ChevronRightIcon } from '@radix-ui/react-icons'
import data from '../data/data.json'

const categoryColors = {
  Electronics: 'from-slate-800 to-slate-600',
  Fashion:     'from-stone-700 to-stone-500',
  Home:        'from-emerald-900 to-emerald-700',
  Beauty:      'from-rose-900 to-rose-700',
}

export default function CategorySection() {
  return (
    // Section: tablet py-40px px-24px / desktop py-56px px-80px
    <section className="bg-white py-[24px] px-[16px] xl:py-[56px] xl:px-[80px] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[16px] xl:gap-6">

        {/* Title: tablet 20px ExtraBold / desktop 24px */}
        <h2 className="text-[18px] xl:text-2xl font-extrabold text-gray-900">Shop by Category</h2>

        {/* Grid: 2 cols tablet (352×160px cards) / 4 cols desktop (220px tall) */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[12px] xl:gap-[16px]">
          {data.categories.map((cat) => (
            <div
              key={cat.id}
              className={`relative bg-gradient-to-br ${categoryColors[cat.name] || 'from-gray-700 to-gray-500'} rounded-[8px] overflow-hidden h-[100px] xl:h-[220px] cursor-pointer group`}
            >
              {/* <div className="absolute inset-0 " /> */}
              <div className="absolute bottom-0 left-0 p-[16px]">
                <p className="text-white font-bold text-base">{cat.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Discover Now</span>
                  <ChevronRightIcon className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

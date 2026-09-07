import { ChevronRightIcon, RocketIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import data from '../data/data.json'

export default function HeroSection() {
  const { badge, title, description, cta, trustBadges } = data.hero

  return (
    <>
      {/* Mobile hero */}
      <section className="md:hidden relative h-[220px] bg-gray-800 flex overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 pt-[32px] px-[16px] pb-[32px] flex flex-col gap-[16px]">
          <span className="text-[#FF4500] text-[11px] font-bold uppercase tracking-widest">{badge}</span>
          <h1 className="text-[32px] font-black text-white leading-tight">{title}</h1>
          <button className="bg-[#FF4500] hover:bg-[#e03d00] text-white font-semibold px-[20px] py-[10px] rounded-[6px] w-fit text-sm transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Tablet + Desktop hero */}
      <section className="hidden md:block bg-white pt-[32px] pr-[24px] pb-[40px] pl-[24px] xl:py-[56px] xl:px-[80px]">
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-start xl:items-center gap-[24px] xl:gap-[40px]">

          {/* Text container — 720 Fill × 206 Hug tablet / flex-1 405 desktop */}
          <div className="w-full xl:flex-1 flex flex-col gap-[16px] xl:gap-[24px] text-left">

            {/* Badge — 256×17 */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#FF4500]" />
              <span className="text-[#FF4500] text-xs font-bold tracking-widest uppercase h-[17px] flex items-center">{badge}</span>
            </div>

            {/* Heading — 40px/110% tablet, 56px/105% desktop */}
            <h1 className="text-[40px] xl:text-[56px] font-black text-gray-950 leading-[1.10] xl:leading-[1.05] tracking-[-0.015em] xl:tracking-[-0.02em] w-full">{title}</h1>

            {/* Subtext — 15px/150% tablet, 18px desktop */}
            <p className="text-gray-500 text-[15px] xl:text-lg leading-[1.5] xl:leading-relaxed w-full">{description}</p>

            {/* CTA buttons — 53px tablet, 55px desktop */}
            <div className="flex items-center gap-3 xl:gap-[16px]">
              <button className="bg-[#FF4500] hover:bg-[#e03d00] text-white font-semibold px-6 h-[53px] xl:h-[55px] rounded-md transition-colors text-sm">
                {cta[0]}
              </button>
              <button className="border border-gray-300 hover:border-gray-500 text-gray-800 font-semibold px-6 h-[53px] xl:h-[55px] rounded-md transition-colors text-sm flex items-center gap-1">
                {cta[1]}
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Trust badges — 374×32 */}
            <div className="flex items-center gap-6 h-[32px] xl:pt-[16px]">
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <RocketIcon className="w-4 h-4" />
                {trustBadges[0]}
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <CheckCircledIcon className="w-4 h-4" />
                {trustBadges[1]}
              </div>
            </div>

          </div>

          {/* Image — 720×280 tablet, 600×450 desktop */}
          <div className="w-full xl:w-[600px] xl:shrink-0">
            <div className="w-full h-[280px] xl:h-[450px] bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-gray-300">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Hero Image</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

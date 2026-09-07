import data from '../data/data.json'

export default function Newsletter() {
  const { title, description, discount, placeholder } = data.newsletter

  return (
    // Section: tablet py-48px px-24px gap-24px / desktop py-64px px-80px
    <section className="bg-gray-950 py-[32px] px-[16px] xl:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-[16px] xl:gap-10">

        {/* Text column: tablet 720px Fill × 77px Hug, gap-8px */}
        <div className="flex flex-col gap-[8px] xl:max-w-[760px]">
          <h2 className="text-[20px] md:text-3xl font-bold text-white">{title}</h2>
          <p className="text-gray-400 text-[12px] xl:text-sm leading-[1.4]">{description}</p>
          <p className="text-[#FF4500] text-sm font-semibold">{discount}</p>
        </div>

        {/* Form column: tablet 720px Fill × 73px Hug, gap-12px */}
        <div className="w-full xl:w-[480px] flex flex-col gap-[12px] xl:gap-0">
          {/* Desktop: single-row container */}
          <div className="hidden xl:flex h-[52px] bg-white border border-gray-700 rounded-lg pl-4 pr-1.5 items-center gap-3">
            <input
              type="email"
              placeholder={placeholder}
              className="flex-1 bg-transparent text-[12px] leading-none text-gray-300 outline-none placeholder-gray-500"
            />
            <button className="bg-[#FF4500] hover:bg-[#e03d00] text-white text-sm font-semibold px-5 h-10 rounded-md shrink-0 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Tablet + mobile: stacked */}
          <div className="xl:hidden flex flex-col gap-[8px]">
            <input
              type="email"
              placeholder={placeholder}
              className="bg-white text-sm text-gray-300 outline-none px-4 py-3 w-full placeholder-gray-500 border border-gray-700 rounded-lg"
            />
            <button className="bg-[#FF4500] hover:bg-[#e03d00] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

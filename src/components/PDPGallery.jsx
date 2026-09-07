import { useState } from 'react'
import { ImageIcon } from '@radix-ui/react-icons'

export default function PDPGallery() {
  const [activeThumb, setActiveThumb] = useState(0)

  return (
    <div className="flex flex-col gap-[12px] md:gap-3 xl:gap-4 p-[16px] md:p-0 xl:w-[680px] shrink-0">
      <div className="w-full h-[278px] md:h-[380px] xl:h-[600px] rounded-[8px] xl:rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-gray-300">
          <ImageIcon className="w-20 h-20" />
          <span className="text-sm">View {activeThumb + 1}</span>
        </div>
      </div>

      {/* Thumbnails: hidden on mobile, visible on desktop */}
      <div className="hidden md:flex gap-[14px]">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setActiveThumb(i)}
            className={`flex-1 h-[124px] rounded-lg border-2 bg-gray-100 flex items-center justify-center transition-colors ${
              activeThumb === i ? 'border-[#FF4500]' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <ImageIcon className="w-7 h-7 text-gray-300" />
          </button>
        ))}
      </div>

      {/* 3 lines visible on mobile only */}
      <div className="flex md:hidden items-center justify-center gap-[6px]">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setActiveThumb(i)}
            className={`rounded-full transition-all ${activeThumb === i ? 'w-[8px] h-[8px] bg-[#FF4500]' : 'w-[6px] h-[6px] bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

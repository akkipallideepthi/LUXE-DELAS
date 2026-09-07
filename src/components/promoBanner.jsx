import { useState } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import data from '../data/data.json'

export default function PromoBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-[#FF4500] text-white px-[16px] xl:px-[80px] flex items-center justify-between h-[36px]">
      <div className="flex-1" />
      <div className="flex items-center gap-3 text-[11px] xl:text-sm font-semibold">
        <span>{data.site.promoBanner}</span>
        <span className="bg-white text-[#FF4500] text-[11px] xl:text-xs font-extrabold px-[6px] py-[2px] rounded-[4px]">
          {data.site.promoCode}
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <button onClick={() => setVisible(false)} className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <Cross2Icon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

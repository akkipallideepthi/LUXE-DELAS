import { useState, useEffect } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import data from '../data/data.json'

export default function PromoBanner() {
  const [visible, setVisible] = useState(true)

  // Parse "04h 32m 15s" → total seconds
  const [h, m, s] = data.flashDeals.timer.match(/\d+/g).map(Number)//any digit any digit + globalflag converts every string in the array to numbber//
  const [timeLeft, setTimeLeft] = useState(h * 3600 + m * 60 + s) //total seconds in h-m-s //

  useEffect(() => {
    if (timeLeft <= 0) return //when timeleft is 0 or less stop count down//
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000)//calls function every 1 sec to decresae time left by 1//
    return () => clearTimeout(id) // cleanup func to clear timeout if compo unmount timeleft //
  }, [timeLeft])//runs every time when timeleft changes//

  const hrs  = String(Math.floor(timeLeft / 3600)).padStart(2, '0') //rounds down to near wholenum and convert to string and pad 0 if lessthan 2//
  const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0')//timeleft in seconds after removing hours and then divide by 60 to get minutes//
  const secs = String(timeLeft % 60).padStart(2, '0')//timeleft in sec after removing hours and minutes//

  if (!visible) return null

  return (
    <div className="bg-[#FF4500] text-white px-[16px] xl:px-[80px] flex items-center justify-between h-[36px]">
      {/* Mobile left direct child so justify-between pushes it to the left edge */}
      <span className="md:hidden text-[11px] font-semibold">Flash Sale: {hrs}:{mins}:{secs}</span>
      {/* tablet+desktop center */}
      <div className="hidden md:block flex-1" /> 
      <div className="hidden md:flex items-center gap-3 text-[11px] xl:text-sm font-semibold">
        <span>Flash Sale Ends In: {hrs}:{mins}:{secs}</span>
        <span className="opacity-40">|</span>
        <span className="bg-white text-[#FF4500] text-[11px] xl:text-xs font-extrabold px-[6px] py-[2px] rounded-[4px]">
          {data.site.promoCode}
        </span>
      </div>

      {/* Mobile right direct child so justify between pushes it to the right edge */}
      <span className="md:hidden bg-white text-[#FF4500] text-[11px] font-extrabold px-[6px] py-[2px] rounded-[4px]">SAVE20</span>

      {/* tablet+desktop right close button */}
      <div className="hidden md:flex flex-1 justify-end">
        <button onClick={() => setVisible(false)} className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <Cross2Icon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

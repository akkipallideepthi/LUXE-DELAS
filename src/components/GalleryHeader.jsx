// GalleryHeader — shows at top of Product Gallery page page title, product count, filter/sort controls
export default function GalleryHeader({ title = 'Electronics', count }) { //title page h

  return (
    <>
      {/*MOBILE LAYOUT hidden on tablet/desktop*/}
      <div className="md:hidden flex flex-col gap-[12px] pt-[12px] px-[16px] pb-[16px]">
        {/* md:hidden → only shows below 768px  flex flex-col → stack: title row on top, buttons row below*/}

        {/* Title + Result count row */}
        <div className="flex items-center justify-between">
          {/* justify-between → title pushed left, count pushed right */}
          <h1 className="text-[24px] font-bold text-gray-900">{title}</h1>
          <span className="text-sm text-gray-400 font-medium">{count} Results</span>
          {/* {count} → dynamic number e.g. "24 Results" */}
        </div>

        {/* Filter + Sort buttons row */}
        <div className="flex items-center gap-[12px]">
          {/* flex-1 on both buttons → they share width equally (50% each) */}

          {/* FILTER button */}
          <button className="flex-1 h-[32px] border border-gray-200 rounded-lg text-sm
                             font-medium text-gray-700 flex items-center justify-center gap-1.5">
            {/* Inline SVG — 3 decreasing lines = filter/funnel icon */}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Filter
          </button>

          {/* SORT button — shows current sort method */}
          {/* UI only — clicking doesn't actually sort products */}
          <button className="flex-1 h-[32px] border border-gray-200 rounded-lg text-sm
                             font-medium text-gray-700 flex items-center justify-center">
            Sort: Discount %
          </button>
        </div>
      </div>

      {/*DESKTOP LAYOUT hidden on mobile, flex row on tablet*/}
      <div className="hidden md:flex px-4 xl:px-[80px] pb-6 items-center justify-between">
        {/* hidden md:flex → only shows from 768px upwards  px-4 desktop → aligns with page content*/}

        {/* LEFT: Title + Count badge */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {/* Count displayed as a pill badge on desktop not plain text like mobile */}
          <span className="text-sm text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
            {count}
          </span>
        </div>
        {/* RIGHT: Sort dropdown + View toggle */}
        <div className="flex items-center gap-4">

          {/* selecting an option is UI only — doesn't sort the actual product list */}
          <select className="text-sm text-gray-700 border border-gray-200 rounded-lg
                             px-3 py-1.5 outline-none cursor-pointer">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>

          {/* VIEW TOGGLE — List view / Grid view buttons */}
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1">

            {/* LIST VIEW button — currently ACTIVE dark background */}
            <button className="w-7 h-7 bg-gray-900 rounded-md flex items-center justify-center">
              {/* bg-gray-900 = dark fill = active state SVG: 3 equal horizontal lines = list/rows layout icon */}
              <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>

            {/* GRID VIEW button — currently INACTIVE no background clicking doesn't actually switch to grid — UI only  */}
            <button className="w-7 h-7 rounded-md flex items-center justify-center
                               text-gray-400 hover:text-gray-700">
              {/* No background = inactive state grid layout icon */}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" />    {/* top-left square */}
                <rect x="14" y="3" width="7" height="7" />   {/* top-right square */}
                <rect x="3" y="14" width="7" height="7" />   {/* bottom-left square */}
                <rect x="14" y="14" width="7" height="7" />  {/* bottom-right square */}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

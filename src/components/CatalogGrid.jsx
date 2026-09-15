import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StarFilledIcon, StarIcon, HeartIcon, ImageIcon, ChevronRightIcon } from '@radix-ui/react-icons'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5"> 
      {[1, 2, 3, 4, 5].map((s) => //creates an array of 5 and maps over themto render 5 stars//
        s <= Math.round(rating) // star number is less than or equal to rating value//
          ? <StarFilledIcon key={s} className="w-3 h-3 text-yellow-400" /> //React needs unique key on each item in a loop//
          : <StarIcon key={s} className="w-3 h-3 text-gray-300" />
      )}
    </div>
  )
}

function ProductCard({ item }) { //Receives one product object item from the data.from the parent commponent//
  const discount = Math.round((1 - item.price / item.originalPrice) * 100) //Math.round: Removes decimals//
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] md:rounded-[12px] xl:rounded-xl p-[8px] md:p-[12px] xl:p-4 flex flex-col gap-[8px] md:gap-[12px] xl:gap-3 hover:shadow-md transition-shadow">
      {/* when we click theimage goes to PDP */}
      <Link to={`/product/${item.id}`} className="relative bg-gray-100 h-[130px] md:h-[160px] xl:h-[200px] rounded-[6px] md:rounded-[8px] xl:rounded-lg flex items-center justify-center shrink-0">
        <ImageIcon className="w-12 h-12 text-gray-300" />
        {/* discount badge*/}
        <span className="absolute top-2 left-2 bg-[#FF4500] text-white text-[10px] font-bold px-2 py-0.5 rounded">-{discount}%</span>{/* discount badge in all products */}
        {item.badge && ( // optional badge only render this if item.badge exists//
          <span className="absolute bottom-2 left-2 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">{item.badge}</span>
        )}
        <button //WISHLIST HEART BUTTON//
          onClick={(e) => e.preventDefault()}
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-[#FF4500] transition-colors"
        >
          <HeartIcon className="w-4 h-4" />
        </button>
      </Link>
      { /* product details */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Clickable title goes to PDP 12px mobile, 14px desktop*/}
        <Link to={`/product/${item.id}`} className="text-[12px] xl:text-sm font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-[#FF4500] transition-colors">
          {item.name}
        </Link>
        <div className="flex items-center gap-1"> {/*5 stars rating and number of reviews*/}
          <Stars rating={item.rating} />
          <span className="text-xs text-gray-400">({item.reviews})</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap"> {/* price and original price*/}
          <span className="text-[#FF4500] font-bold">${item.price}</span> 
          <span className="text-gray-400 line-through text-xs">${item.originalPrice}</span>
        </div>
      </div>
      <div className="hidden md:flex gap-2"> {/* add to cart button is hidden on mobile shows on desktop*/}
        <button className="flex-1 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-[6px] xl:rounded-lg py-[8px] xl:py-[10px] transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const ITEMS_PER_PAGE = 12 //12 products per page is standard for e-commerce site.//

export default function CatalogGrid({ products }) { //receives product from parent caomponet//
  const [page, setPage] = useState(1) //setPage is the function to change it//
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE) //Math.ceil: Always rounds UP //
  const visible = products.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <div className="flex-1 flex flex-col gap-10"> 
    {/* flex-1	Grid takes remaining width after the filter sidebar grid-cols-2	Mobile: 2 products per row md:grid-cols-3	Tablet: 3 per row
      xl:grid-cols-4	Desktop: 4 per row  Space between cards per breakpoint  */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[12px] md:gap-[16px] xl:gap-4">
        {visible.map((item) => <ProductCard key={item.id} item={item} />)} {/*renders the 12 products for the current page and unique key — uses product ID*/}
      </div>
      
      <div className="flex items-center justify-center gap-2">{/*pagination button*/}
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:border-gray-400 disabled:opacity-40 transition-colors"
        >
          <ChevronRightIcon className="w-4 h-4 rotate-180" />
        </button>
        {/* PAGE NUMBER BUTTONS Array.from creates [1, 2, 3] based on totalPages */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => ( 
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
              page === p ? 'bg-gray-900 text-white' : 'border border-gray-200 text-gray-600 hover:border-gray-400'
            }`}
          >
            {p}
          </button>
        ))}
          {/* Math.min(totalPages, page+1) ensures page never goes beyond last page  and disabled when already on last page  */}
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:border-gray-400 disabled:opacity-40 transition-colors"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

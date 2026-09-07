import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@radix-ui/react-icons'

export default function Breadcrumbs({ items }) { //this component can be imported anywhere. { items } is a prop — it receives an array of objects from the parent page//
  return (
    <div className="px-[16px] xl:px-[80px] pt-[12px] pb-0 flex items-center gap-[6px] flex-wrap">
      {items.map((item, i) => ( // loops through every item in the array and renders for each one//
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 && <ChevronRightIcon className="w-3.5 h-3.5 text-gray-300" />}
          {item.href //Previous pages (Home, Electronics) should be navigable//
            ? <Link to={item.href} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">{item.label}</Link> //current page should not be navigable or render//
            : <span className="text-sm text-gray-900 font-medium">{item.label}</span> // link is not rendered for the current page only the label is rendering//
          }
        </span>
      ))}
    </div>
  )
}

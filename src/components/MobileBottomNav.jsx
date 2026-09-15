import { Link, useLocation } from 'react-router-dom'
import { HeartIcon, PersonIcon } from '@radix-ui/react-icons'

function HomeIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CategoryIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function DealsIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function getActiveTab(pathname) {
  if (pathname === '/') return 'home'
  if (pathname === '/products') return 'categories'// the products page is categoires page//
  if (pathname.startsWith('/product/')) return 'deals' //product details page is considered part of deals tab//
  return 'home'
}

export default function MobileBottomNav() {
  const location = useLocation() //react router to get the current path //
  const activeTab = getActiveTab(location.pathname) //determine the active tab based on the current path//

  const tabs = [
    { id: 'home', label: 'Home', href: '/', icon: <HomeIcon /> },//home tab is the root path//
    { id: 'categories', label: 'Categories', href: '/products', icon: <CategoryIcon /> },//categories tab is the products page//
    { id: 'deals', label: 'Deals', href: '/products', icon: <DealsIcon /> },//deals tab is also the products page,but it will highlight in product detail page//
    { id: 'wishlist', label: 'Wishlist', href: '/', icon: <HeartIcon width={20} height={20} /> },//whishlist tab is the root path//
    { id: 'account', label: 'Account', href: '/', icon: <PersonIcon width={20} height={20} /> },//account tab is the root path//
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden h-[65px]">
      <div className="flex items-center justify-between h-[52px] px-2 py-2">
        {tabs.map((tab) => { //map over the tabs array
          const isActive = tab.id === activeTab
          return (
            <Link
              key={tab.id} // required by React for list rendering
              to={tab.href}        // where to navigate on click React Router — no page reload
              className={`flex flex-col items-center justify-center gap-1 w-[64px] h-[36px] text-[10px] font-medium ${ // 4px between icon and label
                isActive ? 'text-[#FF4500]' : 'text-gray-400'// SVG icon — turns orange when active 
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

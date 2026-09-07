import { useState } from 'react'
import { Link } from 'react-router-dom'
import {MagnifyingGlassIcon,HeartIcon,PersonIcon,HamburgerMenuIcon,Cross2Icon,} from '@radix-ui/react-icons'

// Cart icon is not in Radix //
function CartIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[80px] h-14 md:h-[80px] flex items-center justify-between relative">

          <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <HamburgerMenuIcon className="w-5 h-5 text-gray-700" />
          </button>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-1 shrink-0"
          >
            <span className="text-xl md:text-2xl font-extrabold text-black tracking-tight">LUXE</span>
            <span className="text-xl md:text-2xl font-extrabold text-[#FF4500] tracking-tight">DEALS</span>
          </Link>

          <div className="hidden md:flex flex-1 mx-8 xl:mx-12 justify-center">
            <div className="flex items-center bg-gray-100 border border-gray-200 rounded-[8px] px-[16px] gap-[10px] w-full max-w-[480px] h-[44px]">
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search premium products, tech, luxury apparel..."
                className="bg-transparent text-sm text-gray-500 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-5">

            <button className="md:hidden text-gray-700">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="md:hidden relative text-gray-700">
              <CartIcon className="w-5 h-5" />
            </button>

            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#FF4500] transition-colors">
              <div className="relative">
                <HeartIcon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Wishlist</span>
            </button>

            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#FF4500] transition-colors">
              <div className="relative">
                <CartIcon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Cart</span>
            </button>

            <div className="hidden md:block w-px h-9 bg-gray-200" />

            <div className="hidden md:flex w-9 h-9 rounded-full bg-gray-200 items-center justify-center shrink-0">
              <PersonIcon className="w-5 h-5 text-gray-500" />
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[260px] bg-white flex flex-col shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-0.5">
                <span className="text-lg font-extrabold text-black">LUXE</span>
                <span className="text-lg font-extrabold text-[#FF4500]">DEALS</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <Cross2Icon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="mt-auto p-4 border-t border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <PersonIcon className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">My Account</p>
                <p className="text-xs text-gray-400">Sign in / Register</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

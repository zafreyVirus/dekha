"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

function Navbar() {
  const pathname = usePathname()
  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]
  
  const [open, setOpen] = useState<boolean>(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-white shadow-sm relative z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Image 
              src="/dekha_logo.png" 
              alt="Dekha Logo" 
              width={28} 
              height={28} 
              className="h-7 w-7" 
            />
            <span className="text-xl font-semibold text-lightblue whitespace-nowrap">
              Dekha Consultancy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors duration-200 relative ${
                  isActive(link.path)
                    ? "text-lightblue"
                    : "text-gray-700 hover:text-lightblue"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lightblue"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lightblue"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              // Close icon
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
{/* Mobile Navigation Overlay */}
<div
  className={`md:hidden fixed top-16 left-0 w-full bg-gray-50 border-t border-gray-200 z-40 transition-all duration-300 ease-in-out
    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
>
  <div className="px-4 pt-4 pb-6 space-y-2 shadow-lg">
    {NavLinks.map((link) => (
      <Link
        key={link.name}
        href={link.path}
        onClick={() => setOpen(false)}
        className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
          isActive(link.path)
            ? "bg-lightblue text-white"
            : "text-gray-700 hover:bg-lightblue hover:text-white"
        }`}
      >
        {link.name}
      </Link>
    ))}
  </div>
</div>

    </nav>
  )
}

export default Navbar
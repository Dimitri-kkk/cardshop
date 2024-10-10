'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingCart, Menu, X, LogOut } from 'lucide-react'

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleSignIn = () => {
    router.push('/signin')
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setUserName('')
    // Add any additional sign-out logic here (e.g., clearing tokens, etc.)
  }

  // Simulating a sign-in effect
  useEffect(() => {
    // This is just for demonstration. In a real app, you'd check the auth state here.
    // აქ შესაცვლელი გაქვს ლოგიკაა !! !! !! !! 
    const timer = setTimeout(() => {
      setIsSignedIn(false)
      setUserName('John Doe')
    }, 2000) // Simulates signing in after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={300}
              height={150}
              className="object-contain"
            />
          </Link>

          {/* Search, Sign In/Out, and Cart for large screens */}
          {!isSmallScreen && (
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 text-black rounded-md"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              {isSignedIn ? (
                <>
                  <span className="text-white">{userName}</span>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center px-4 py-2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sign Out
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleSignIn}
                  className="flex items-center px-4 py-2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200"
                >
                  <User className="mr-2 h-4 w-4" /> Sign In
                </button>
              )}
              <button className="flex items-center px-4 py-2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200">
                <ShoppingCart className="mr-2 h-4 w-4" /> Cart
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          {isSmallScreen && (
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className={`${isSmallScreen && !isMenuOpen ? 'hidden' : 'block'} mt-4`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            {['მთავარი', 'კატეგორია', 'ჩვენ შესახებ', 'კონტაქტი'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'მთავარი' ? '/' : `/${item.toLowerCase()}`} 
                  className="block py-2 lg:py-0 hover:text-gray-300 relative group"
                >
                  {item}
                  <span className="absolute top-8 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Search, Sign In/Out, and Cart */}
        {isSmallScreen && isMenuOpen && (
          <div className="mt-4">
            <div className="relative mb-2">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 text-black rounded-md"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex justify-between">
              {isSignedIn ? (
                <>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center justify-center w-1/2 px-4 py-2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sign Out
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleSignIn}
                  className="flex items-center justify-center w-1/2 mr-2 px-4 py-2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200"
                >
                  <User className="mr-2 h-4 w-4" /> Sign In
                </button>
              )}
              <button className="flex items-center justify-center w-1/2 px-4 py-2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200">
                <ShoppingCart className="mr-2 h-4 w-4" /> Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
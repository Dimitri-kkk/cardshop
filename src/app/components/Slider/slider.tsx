'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// This would typically come from your database or API
const initialSlides = [
  { id: 1, image: '/images/bluff.jpg', link: '/shop/summer-collection' },
  { id: 2, image: '/images/bluf.jpg', link: '/shop/summer-collection' }

]

export default function Slider() {
  const [slides, setSlides] = useState(initialSlides)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowButton(true)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setShowButton(false)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setShowButton(false)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    setShowButton(true)
  }

  const handleShopNow = () => {
    router.push(slides[currentSlide].link)
  }

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      
      <div 
        className={`absolute bottom-0 left-0 right-0 flex justify-center transition-transform duration-300 ${
          showButton ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button 
          className="bg-black text-white px-6 py-2 mb-4 transition-colors duration-300 hover:bg-orange-500"
          onClick={handleShopNow}
        >
          Shop Now
        </button>
      </div>
    </div>
  )
}
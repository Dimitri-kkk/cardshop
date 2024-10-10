'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    image: '/images/lashiko.jpg',
    description: `"ნიჭიერი 2020"-ის გამარჯვებული. საქართველოში ამერიკული დასტების ჩამომტანი და გაყიდვების ორგანიზატორი.`,
    name: "ლაშა გელაშვილი"
  },
  {
    image: '/images/uspcc.svg',
    description: `კომპანია USPCC მიერ წარმოებული უმაღლესი ხარისხის ნახევრად-პლასტიკატი და აგრეთვე 100% პლასტიკატი დასტები.`,
    name: "USPCC"
  },
  {
    image: '/images/artisan.webp',
    description: `კარტები გამოირჩევა მაღალი ხარისხითა და გამძლეობით, რომელიც იდეალურია და გათვლილია ფოკუსებისთვის`,
    name: "Produced by USPCC"
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                  <div className="relative w-full h-0 pb-[100%]">
                    <Image
                      src={slide.image}
                      alt={slide.description}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4 flex items-center">
                  <div>
                    <p className="text-black-500 text-base font-bold mb-2">{slide.description}</p>
                    <p className="text-black-600 text-xl font-bold mt-10 mb-2">{slide.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="flex justify-center mt-4 pb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors ${
              currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
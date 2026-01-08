"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 30000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full min-h-screen">

      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >

              <Image
                src={slide}
                className="object-cover"
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0}
              />

            </div>
          ))}
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#03254c]/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-between text-left h-full px-4 sm:px-6 lg:px-8 pt-32">
        <div className=" flex flex-col justify-start max-w-4xl text-center text-white md:w-[60%]">
          <p className="text-[#19a9d8] text-left text-sm sm:text-base font-semibold mb-4 tracking-wide">
            Your Partner in People Management and Business Growth
          </p>

          <h1 className="text-4xl text-left sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Building Stronger Teams for a Brighter Future
          </h1>

          <p className="text-lg text-left sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl">
            We streamline your Human Resources operations, allowing you to focus on what matters most: scaling your company and achieving your vision.
          </p>

          <div className='flex justify-start flex-col md:flex-row gap-2'>
            <Link href="/services">
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#19a9d8] w-fit text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg">
                Our Services
              </motion.button>
            </Link>


            <Link href="/contact">
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className="border border-[#19a9d8] w-fit hover:text-[#19a9d8] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-lg">
                Get in Touch
              </motion.button>
            </Link>
          </div>

        </div>

        <div className='text-white hidden md:block pt-30'>
          <div
            // initial={{ x: 0, opacity: 1 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          >

            <Image src={"/images/heroleft.png"} alt="Hero Image" width={400} height={600} className="rounded-xl shadow-lg" />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Hero
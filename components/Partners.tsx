"use client"
import Image from 'next/image'
import CallToAction from './CallToAction'

const Partners = () => {
    const partners = [
        {name: "Malawi Job search", image: "/images/Partners/infinity_media.jpg"},
        {name: "Latest vacancies", image: "/images/Partners/latest_vac.jpg"},
        {name: "Vacancies and Internships", image: "/images/Partners/vac_intern.jpg"},
        {name: "Mwai", image: "/images/Partners/mwai.jpg"},
        {name: "Malawi Job Vacancies", image: "/images/Partners/mw_job_vac.jpg"},
        {name: "giz", image: "/images/Partners/giz.jpg"}
    ]

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between gap-8 mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-deepblue md:w-1/2'>Partners</h1>
          <p className='md:w-1/2 text-gray-600 text-lg max-w-3xl mx-auto'>
            We collaborate with passionate organizations, institutions, and networks that share our vision for a cleaner, greener, and more climate-resilient future.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 w-40 h-40 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={160}
                  height={160}
                  className="object-contain p-4"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 w-40 h-40 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={160}
                  height={160}
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <CallToAction/>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Partners
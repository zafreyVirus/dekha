import CoreValues from '@/components/CoreValues'
import TeamSection from '@/components/Team'
import Image from 'next/image'
import { FiTarget } from "react-icons/fi";
import { GiTargetShot } from "react-icons/gi";
import React from 'react'
import Link from 'next/link';
import PageHero from '@/components/PageHero';

const page = () => {
    return (
        <div>

<>
<PageHero
  title="About Us"
  subtitle="Building sustainable HR solutions for organizations in Malawi"
  imageSrc="/images/1.jpg"
/>
</>

            <div className='flex gap-10 flex-col md:flex-row items-center justify-between mt-10 md:p-20 p-10'>
                <div className='rounded-md overflow:hidden mb-5'>
                    <Image src={'/images/1.jpg'} alt='What you need to know about our org.' height={400} width={600} className='rounded-md' />
                </div>
                <div className='flex md:w-[50%] flex-col mb-10'>
                    <h1 className='text-4xl text-deepblue font-bold mb-10' >What You need to know about Us</h1>
                    <p className='mb-10'>
                        <span className='font-semibold'>What is Dekha Consultancy</span> is a dynamic human resources firm based in Malawi, specializing in providing comprehensive HR solutions to businesses across various sectors. The company acts as a vital link between employers seeking talent and qualified professionals looking for new opportunities within the Malawian job market
                    </p>

<Link href={"/services"}>
                    <button className='bg-lightblue text-white border hover:border-deepblue hover:bg-transparent hover:text-deepblue  w-fit p-2 rounded-md'>
                        Explore our services
                    </button>
</Link>
                </div>
            </div>

<section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-12 flex-col lg:flex-row items-center justify-between'>
          
          {/* Left Content */}
          <div className='flex-1 w-full lg:w-1/2'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-deepblue font-bold mb-12 leading-tight'>
              Creating Best HRs in Malawi and Beyond
            </h1>

            {/* Vision Section */}
            <div className='flex gap-4 mb-10'>
              <div className='flex-shrink-0 mt-1'>
                <div className='w-10 h-10 rounded-full bg-lightblue/10 flex items-center justify-center'>
                  <FiTarget size={24} className='text-lightblue' />
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-xl md:text-2xl font-semibold mb-3'>
                  Our <span className='text-lightblue'>Vision</span>
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  <span className='font-semibold text-deepblue'>What is Dekha Consultancy</span> is a dynamic human resources firm based in Malawi, specializing in providing comprehensive HR solutions to businesses across various sectors. The company acts as a vital link between employers seeking talent and qualified professionals looking for new opportunities within the Malawian job market.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className='flex gap-4 mb-10'>
              <div className='flex-shrink-0 mt-1'>
                <div className='w-10 h-10 rounded-full bg-lightblue/10 flex items-center justify-center'>
                  <GiTargetShot size={24} className='text-lightblue' />
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-xl md:text-2xl font-semibold mb-3'>
                  <span className='text-lightblue'>Our</span> Mission
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  <span className='font-semibold text-deepblue'>What is Dekha Consultancy</span> is a dynamic human resources firm based in Malawi, specializing in providing comprehensive HR solutions to businesses across various sectors.
                </p>
              </div>
            </div>

            {/* Impact Numbers */}
            <div className='grid grid-cols-3 gap-6 mb-10'>
              <div>
                <h3 className='text-3xl md:text-4xl font-bold text-deepblue mb-2'>500+</h3>
                <p className='text-sm md:text-base text-gray-600 font-medium'>Clients Served</p>
              </div>
              <div>
                <h3 className='text-3xl md:text-4xl font-bold text-deepblue mb-2'>1,000+</h3>
                <p className='text-sm md:text-base text-gray-600 font-medium'>Candidates Placed</p>
              </div>
              <div>
                <h3 className='text-3xl md:text-4xl font-bold text-deepblue mb-2'>50+</h3>
                <p className='text-sm md:text-base text-gray-600 font-medium'>Companies Partnered</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/services">
              <button className='bg-lightblue text-white hover:bg-deepblue transition-all duration-300 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
                Explore our services
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className='flex-1 w-full lg:w-1/2'>
            <div className='relative rounded-xl overflow-hidden shadow-2xl'>
              <Image 
                src='/images/1.jpg' 
                alt='Dekha Consultancy Team' 
                width={600} 
                height={400} 
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

        </div>
      </div>
    </section>

            <CoreValues />
            <TeamSection />
        </div>
    )
}

export default page

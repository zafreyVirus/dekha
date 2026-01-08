import CallToAction from '@/components/CallToAction'
import PageHero from '@/components/PageHero'
import Services from '@/components/Services'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
<>
<PageHero
  title="Our Services"
  subtitle="Professional HR consultancy services tailored for your growth"
  imageSrc="/images/1.jpg"
/></>

      <Services/>
      <CallToAction/>
    </div>
  )
}

export default page

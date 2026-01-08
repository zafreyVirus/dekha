import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import PageHero from '@/components/PageHero'
import Image from 'next/image'

const page = () => {
  return (
    <div>
<>
      <PageHero
        title="Contact Us"
        subtitle="Transforming Human Resource management in Malawi and beyond, towards Malawi Vision 2063"
        imageSrc="/images/1.jpg"
      />
</>

      <FAQ/>
      <Contact />
    </div>
  )
}

export default page

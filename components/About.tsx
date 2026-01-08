import Image from 'next/image';
import Link from 'next/link';

function About() {
    return (
        <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl md:text-4xl text-deepblue font-bold mb-4'>
                        About Us
                    </h1>
                    <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                        Dekha HR Consultancy provides professional HR solutions to help organizations attract, manage, and retain top talent.
                    </p>
                </div>

                {/* Main Content */}
                <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-start'>
                    
                    {/* Left Section - Image with Experience Card */}
                    <div className="relative w-full lg:w-1/2 mb-20 lg:mb-0">
                        {/* Image Wrapper */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/1.jpg"
                                alt="About Us"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Floating Experience Card */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 bg-lightblue text-white text-center rounded-lg px-8 py-6 w-[180px] shadow-2xl z-10">
                            <h3 className="text-4xl font-bold mb-2">
                                {new Date().getFullYear() - 2020}+
                            </h3>
                            <p className="text-sm font-medium">Years of<br />Experience</p>
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className='flex flex-col gap-6 w-full lg:w-1/2'>
                        {/* Dekha Header with Lines */}
                        <div className='flex items-center gap-4 mb-2'>
                            <h2 className='text-deepblue font-bold text-2xl'>Dekha</h2>
                            <div className="flex flex-col gap-1.5">
                                <span className="h-[3px] w-16 bg-lightblue rounded"></span>
                                <span className="h-[2px] w-10 bg-lightblue rounded"></span>
                            </div>
                        </div>

                        {/* Trusted Partners */}
                        <div>
                            <h2 className='font-bold text-xl md:text-2xl mb-3'>
                                Your <span className='text-lightblue'>Trusted</span> Partners
                            </h2>
                            <p className='text-gray-600 leading-relaxed'>
                                We offer best HR services in Malawi and beyond, always on the goal to change Malawi for better towards vision 2063.
                            </p>
                        </div>

                        {/* Why Dekha */}
                        <div>
                            <h2 className='font-bold text-xl md:text-2xl mb-3'>
                                Why <span className='text-lightblue'>Dekha</span> Consultancy
                            </h2>
                            <p className='text-gray-600 leading-relaxed'>
                                We offer best HR services in Malawi and beyond, always on the goal to change Malawi for better towards vision 2063.
                            </p>
                        </div>

                        {/* What We Will Be */}
                        <div>
                            <h2 className='font-bold text-xl md:text-2xl mb-3'>
                                What <span className='text-lightblue'>We Will</span> Be
                            </h2>
                            <p className='text-gray-600 leading-relaxed'>
                                We offer best HR services in Malawi and beyond, always on the goal to change Malawi for better towards vision 2063.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className='mt-4'>
                            <Link href="/about">
                                <button className='bg-lightblue hover:bg-deepblue text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg'>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
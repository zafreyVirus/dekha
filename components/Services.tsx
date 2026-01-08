import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
    const services = [
        {
            service: "Recruitment & Talent Acquisition", 
            description: "Find the right talent for your organization with our comprehensive recruitment solutions. We streamline the hiring process and connect you with top professionals.",
            icon: "👥"
        },
        {
            service: "Employee Training & Development", 
            description: "Invest in your team's growth with customized training programs. We develop skills that drive performance and foster continuous learning.",
            icon: "📚"
        },
        {
            service: "Performance Management", 
            description: "Optimize employee performance with structured evaluation systems. We help you set clear goals and provide meaningful feedback.",
            icon: "📊"
        },
        {
            service: "Compensation & Benefits Planning", 
            description: "Design competitive compensation packages that attract and retain talent. We ensure your benefits align with industry standards.",
            icon: "💰"
        },
        {
            service: "Organizational Development", 
            description: "Build stronger organizational structures and foster a positive workplace culture. We guide transformational change initiatives.",
            icon: "🏢"
        },
        {
            service: "HR Strategy Consulting", 
            description: "Develop comprehensive HR strategies aligned with your business goals. We provide expert guidance for sustainable growth.",
            icon: "🎯"
        },
        {
            service: "Employee Relations", 
            description: "Create harmonious workplace relationships and resolve conflicts effectively. We promote engagement and employee satisfaction.",
            icon: "🤝"
        },
        {
            service: "Compliance & Legal Advisory", 
            description: "Navigate complex labor laws and regulations with confidence. We ensure your HR practices meet all legal requirements.",
            icon: "⚖️"
        }
    ]

    return (
        <div className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-lightblue font-semibold text-sm uppercase tracking-wide mb-2">
                        Our Services
                    </p>
                    <h2 className="text-4xl font-bold text-deepblue mb-4">
                        Comprehensive HR Solutions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We provide end-to-end human resources services to help your business thrive and your people succeed.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                        >
                            {/* Icon Section */}
                            <div className="bg-gradient-to-br from-lightblue to-deepblue p-6 text-center">
                                <div className="text-5xl mb-2">{service.icon}</div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-deepblue mb-3 group-hover:text-lightblue transition-colors">
                                    {service.service}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <Link 
                                    href={`/services/${service.service.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-lightblue hover:text-deepblue font-semibold text-sm transition-colors group"
                                >
                                    Learn more
                                    <svg 
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                
            </div>
        </div>
    )
}

export default Services

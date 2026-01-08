'use client'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services does Dekha Consultancy offer?",
      answer: "Dekha Consultancy is a dynamic human resources firm based in Malawi, specializing in providing comprehensive HR solutions to businesses across various sectors. We offer recruitment, talent acquisition, employee training, performance management, compensation planning, and HR strategy consulting."
    },
    {
      question: "How can I apply for jobs through Dekha Consultancy?",
      answer: "You can browse our current job openings on our website and submit your application directly through our online portal. Our team will review your application and contact you if your qualifications match our client's requirements."
    },
    {
      question: "Do you provide HR consulting for small businesses?",
      answer: "Yes, we work with businesses of all sizes across Malawi. Whether you're a startup or an established company, we tailor our HR solutions to meet your specific needs and budget."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve clients across various sectors including technology, healthcare, finance, manufacturing, retail, and non-profit organizations. Our diverse experience allows us to provide industry-specific HR solutions."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Header */}
          <div className="lg:sticky lg:top-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepblue mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Reach out to us and let's create stronger teams and better HR solutions for your organization together.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ
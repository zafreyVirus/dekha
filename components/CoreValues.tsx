"use client"
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { motion } from "motion/react";

const CoreValues = () => {
  const coreValues = [
    "Professional Excellence",
    "Client-Centered Approach",
    "Innovation & Growth",
    "Integrity & Trust",
    "Collaboration",
  ];

  return (
<section className="relative w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          
          {/* FULL WIDTH IMAGE */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/core_values.jpg"
              alt="Our Core Values"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* OVERLAY CARD - Below on mobile, overlay on desktop */}
          <motion.div
          initial={{y:200, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:0.7, ease:"easeOut"}}
          className="relative -mt-20 mx-4 sm:mx-8 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 lg:mx-0 bg-white p-8 sm:p-10 lg:p-12 shadow-2xl rounded-lg z-10 lg:w-[500px]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deepblue mb-6 lg:mb-8">
              Our Core Values
            </h2>

            <ul className="space-y-4 mb-8 lg:mb-10">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-lightblue text-white mt-0.5">
                    <TiTick size={18} />
                  </span>
                  <span className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/services">
              <button className="w-full sm:w-auto border-2 border-lightblue px-6 py-3 font-semibold text-lightblue transition-all duration-300 hover:bg-lightblue hover:text-white rounded-lg">
                EXPLORE OUR SERVICES
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
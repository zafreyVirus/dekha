import Image from "next/image";

const IconSection = () => {
  const features = [
    {
      icon: "/images/icon1.png",
      title: "Efficient Delivery",
      alt: "Efficient Delivery"
    },
    {
      icon: "/images/icon2.png",
      title: "Trusted by Many",
      alt: "Trusted by Many"
    },
    {
      icon: "/images/icon3.png",
      title: "Tailored Solutions",
      alt: "Tailored Solutions"
    },
    {
      icon: "/images/icon4.png",
      title: "Transparent Terms",
      alt: "Transparent Terms"
    }
  ];

  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={50}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    filter: 'invert(64%) sepia(58%) saturate(2270%) hue-rotate(179deg) brightness(58%) contrast(53%)'
                  }}
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconSection;
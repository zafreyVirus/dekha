import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

const PageHero = ({ title, subtitle, imageSrc }: PageHeroProps) => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deepblue/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;

import React from 'react';
import LogoLoop from '@/components/LogoLoop';

const Collabs = () => {
  // Custom logo component with image and title
  const LogoWithTitle = ({ src, alt, title }) => (
    <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <p className="text-xs sm:text-sm md:text-base font-semibold text-[#4A3E31] text-center max-w-[150px] sm:max-w-[180px] md:max-w-[200px] leading-tight">
        {title}
      </p>
    </div>
  );

  // Image logos with custom nodes
  const imageLogos = [
    { 
      node: <LogoWithTitle 
        src="src/img/gerb.png" 
        alt="O'zbekiston Respublikasi Gerbi" 
        title="Yoshlar ishlari agentligi"
      />,
      title: "Yoshlar ishlari agentligi",
      href: "#" 
    },
    { 
      node: <LogoWithTitle 
        src="src/img/adliya.png" 
        alt="Adliya Vazirligi" 
        title="Adliya vazirligi"
      />,
      title: "Adliya vazirligi",
      href: "#" 
    },
    { 
      node: <LogoWithTitle 
        src="src/img/fan.png" 
        alt="Fan va Innovatsiyalar Vazirligi" 
        title="Fan va innovatsiyalar vazirligi"
      />,
      title: "Fan va innovatsiyalar vazirligi",
      href: "#" 
    },
    { 
      node: <LogoWithTitle 
        src="src/img/talim.png" 
        alt="Maktab Ta'lim Vazirligi" 
        title="Maktab ta'lim vazirligi"
      />,
      title: "Maktab ta'lim vazirligi",
      href: "#" 
    },
  ];

  return (
    <div id="collabs" className="w-full min-h-screen bg-[#F2EFE6] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 scroll-mt-20">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3E31] mb-4">
          Our Collaborations
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#6B5D4F] max-w-3xl mx-auto px-4">
          Partnering with government institutions to strengthen legal education in Uzbekistan
        </p>
      </div>

      {/* Logo Loop - First Row (Left Direction) */}
      <div className="relative overflow-hidden mb-12 sm:mb-16 h-40 sm:h-48 md:h-56 flex items-center">
        <LogoLoop
          logos={imageLogos}
          speed={80}
          direction="left"
          logoHeight={120}
          gap={80}
          hoverSpeed={20}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#F2EFE6"
          ariaLabel="Government partners"
        />
      </div>

      {/* Logo Loop - Second Row (Right Direction) */}
      <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 flex items-center">
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="right"
          logoHeight={120}
          gap={80}
          hoverSpeed={20}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#F2EFE6"
          ariaLabel="Ministry partnerships"
        />
      </div>

      {/* Partnership Statement */}
      <div className="text-center mt-12 sm:mt-16 max-w-4xl mx-auto px-4">
        <p className="text-sm sm:text-base md:text-lg text-[#6B5D4F] leading-relaxed">
          JIL proudly collaborates with leading government institutions to provide 
          authentic legal education and create opportunities for the next generation 
          of legal professionals in Uzbekistan.
        </p>
      </div>
    </div>
  );
};

export default Collabs;
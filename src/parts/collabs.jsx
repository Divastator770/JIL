import React from 'react';
import LogoLoop from '@/components/LogoLoop';

// 🔹 Rasmlarni import qilamiz
import gerb from '@/img/gerb.png';
import adliya from '@/img/adliya.png';
import fan from '@/img/fan.png';
import talim from '@/img/talim.png';

const Collabs = () => {
  const LogoWithTitle = ({ src, alt, title }) => (
    <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <p className="text-xs sm:text-sm md:text-base font-semibold text-[#4A3E31] text-center max-w-[200px] leading-tight">
        {title}
      </p>
    </div>
  );

  const imageLogos = [
    {
      node: (
        <LogoWithTitle
          src={gerb}
          alt="O'zbekiston Respublikasi Gerbi"
          title="Yoshlar ishlari agentligi"
        />
      ),
      title: "Yoshlar ishlari agentligi",
      href: "#",
    },
    {
      node: (
        <LogoWithTitle
          src={adliya}
          alt="Adliya vazirligi"
          title="Adliya vazirligi"
        />
      ),
      title: "Adliya vazirligi",
      href: "#",
    },
    {
      node: (
        <LogoWithTitle
          src={fan}
          alt="Fan va innovatsiyalar vazirligi"
          title="Fan va innovatsiyalar vazirligi"
        />
      ),
      title: "Fan va innovatsiyalar vazirligi",
      href: "#",
    },
    {
      node: (
        <LogoWithTitle
          src={talim}
          alt="Maktab ta'lim vazirligi"
          title="Maktab ta'lim vazirligi"
        />
      ),
      title: "Maktab ta'lim vazirligi",
      href: "#",
    },
  ];

  return (
    <div
      id="collabs"
      className="w-full min-h-screen bg-[#F2EFE6] py-20 px-4 scroll-mt-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4A3E31] mb-4">
          Our Collaborations
        </h1>
        <p className="text-lg text-[#6B5D4F] max-w-3xl mx-auto">
          Partnering with government institutions to strengthen legal education in Uzbekistan
        </p>
      </div>

      <div className="relative overflow-hidden mb-16 h-56 flex items-center">
        <LogoLoop
          logos={imageLogos}
          speed={80}
          direction="left"
          gap={80}
          fadeOut
          fadeOutColor="#F2EFE6"
          ariaLabel="Government partners"
        />
      </div>

      <div className="relative overflow-hidden h-56 flex items-center">
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="right"
          gap={80}
          fadeOut
          fadeOutColor="#F2EFE6"
          ariaLabel="Ministry partnerships"
        />
      </div>
    </div>
  );
};

export default Collabs;

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeComponent = () => {
  const thoughts = [
    "Drive More Traffic to Your Home Remodeling Business Website.",
    "Improve Lead Quality with Custom Websites for Remodelers.",
    "Sell More Remodeling Services with High-Impact Designs.",
    "Enhance Your Online Presence for Long-Term Growth.",
    "Showcase Your Projects and Build Client Trust.",
    "Custom Websites to Highlight Your Home Remodeling Expertise.",
  ];

  return (
    <div className="bg-[#3491F5] py-6 mt-24">
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover
        className="text-white text-xl capitalize font-semibold"
      >
        {thoughts.map((thought, index) => (
          <div key={index} className="flex items-center space-x-4 mx-4">
            <Image
              src="/icons/coding.png"
              alt="Google Rating in PrimeWave Solutions"
              width={70}
              height={70}
              priority={true}
              quality={100}
            />
            <span className="text-white font-bold text-lg">{thought}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;

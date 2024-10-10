"use client";
import { works } from "@/data/featuredWorks";
import FeaturedWorksCard from "./FeaturedWorksCard";

const Portfolio = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((portfolio, index) => (
            <div className="relative w-full h-[450px]" key={index}>
              <FeaturedWorksCard portfolio={portfolio} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

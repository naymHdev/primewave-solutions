"use client";
import { works } from "@/data/featuredWorks";
import FeaturedWorksCard from "./FeaturedWorksCard";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

const Portfolio = () => {
  return (
    <>
      <ResponsiveContainer>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {works.map((portfolio, index) => (
            <div className="relative w-full h-[450px]" key={index}>
              <FeaturedWorksCard portfolio={portfolio} />
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default Portfolio;

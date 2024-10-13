import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import RouteBanner from "@/components/common/RouteBanner";
import SectionName from "@/components/common/SectionName";
import MarqueeComponent from "@/components/MarqueeComponent";
import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import DesignProcess from "@/components/Pages/DesignProcess/DesignProcess";
import { microNiche } from "@/data/microNiche";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <RouteBanner
        src="/videos/services.mp4"
        name="Tailored Remodeling Solutions for Every Home"
        title="Expert Remodeling Solutions That Bring Your Dream Space to Life"
      />
      <SectionName
        name="From Blueprint To Build"
        title="Fusing Design, Craftsmanship & Technology To Transform Homes"
      />
      <div className="">
        <ResponsiveContainer>
          <section className="">
            {microNiche?.map((niche, index) => (
              <div key={index} className="mt-12 lg:flex lg:space-x-12">
                {/* Text Content */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h2 className="text-2xl font-bold mb-2 text-secondary dark:text-white">
                    {niche.title}
                  </h2>
                  <h3 className="text-lg text-gray-600 dark:text-white mb-4">
                    {niche.category}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-foreground mb-6">
                    {niche.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-secondary dark:text-white">
                      Key Steps:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-foreground space-y-2">
                      {niche.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 flex justify-center">
                  <Image
                    src={niche.image}
                    alt={niche.category}
                    width={600}
                    height={500}
                    className="rounded-lg"
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 
                        (max-width: 1200px) 50vw, 
                        600px"
                  />
                </div>
              </div>
            ))}
          </section>
        </ResponsiveContainer>
        <DesignProcess />
        <MarqueeComponent />
        <ContactUs />
      </div>
    </>
  );
};

export default Services;

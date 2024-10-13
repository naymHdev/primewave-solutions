import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import { features } from "@/data/whyChoose";

const WhyChoose = () => {
  return (
    <>
      <SectionName
        name="Our Key Benefits"
        title="Why Choose PrimeWave Solutions"
        details="Elevating Brands With Custom Web Design, Effective Marketing, and
              Strategic Branding Solutions"
      />
      <ResponsiveContainer>
        <section className="py-16">
          <div className="">
            {/* Dynamic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {features.map((feature) => (
                <div key={feature.id} className="text-start flex gap-4">
                  <div className=" text-2xl font-bold text-legendary mt-1">
                    0{feature.id}.
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">
                      {`${feature.title}`}
                    </h3>
                    <p className="text-black dark:text-foreground font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ResponsiveContainer>
    </>
  );
};

export default WhyChoose;

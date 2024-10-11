import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import { primeWaveFaq } from "@/data/faq";
import Image from "next/image";

const FaqSection = () => {
  return (
    <>
      <SectionName
        name="Frequently Asked Questions"
        title="Crafting Unique Experiences in Home Remodeling"
        details="Attract more clients with a professional online presence designed for your remodeling business."
      />
      <div className="mt-4">
        <ResponsiveContainer>
          <div className="md:flex gap-8">
            <section className=" flex-1 order-first md:order-last">
              <div className="w-full h-auto">
                <Image
                  className="w-full h-auto object-cover"
                  src="/images/faq.jpg"
                  alt="Solutions Image"
                  width={500}
                  height={300}
                  priority={true}
                />
              </div>
            </section>
            <section className=" flex-1">
              <div className="border-b border-b-secondary" />
              {primeWaveFaq?.map((faq) => (
                <div
                  key={faq.id}
                  className="collapse collapse-plus mt-6 border-b border-b-secondary rounded-none"
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title md:text-xl font-semibold text-secondary">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default FaqSection;

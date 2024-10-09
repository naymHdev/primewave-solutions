import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import { primeWaveFaq } from "@/data/faq";

const FaqSection = () => {
  return (
    <>
      <SectionName
        name="Frequently Asked Questions"
        title="Crafting Unique Experiences in Home Remodeling"
        details="Attract more clients with a professional online presence designed for your remodeling business."
      />
      <div className="min-h-screen flex items-center justify-center mt-4">
        <ResponsiveContainer>
          <div className=" md:w-10/12 mx-auto">
            {primeWaveFaq?.map((faq) => (
              <div
                key={faq.id}
                className="collapse collapse-plus mt-6 border border-secondary rounded-none"
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-semibold text-secondary">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default FaqSection;

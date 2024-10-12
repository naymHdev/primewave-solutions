import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import FaqSection from "@/components/Pages/Faq/FaqSection";
import ReviewSection from "@/components/Pages/Reviews/Reviews";
import WhyChoose from "@/components/Pages/WhyChoose/WhyChoose";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div>
        <Image
          className=" w-full h-auto"
          src="/videos/abouts.gif"
          alt="Gif Description"
          width={500}
          height={300}
          priority={true}
        />
      </div>
      <div className="">
        <SectionName
          name="Our Mission"
          title="Empowering Remodeling Contractors to Grow Digitally"
          details="Our mission is to build the digital foundations that drive success for your remodeling business. From websites that convert to strategies that grow, we're here to help you achieve sustainable success."
        />
      </div>
      <ResponsiveContainer>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 space-y-8 md:space-y-0">
          {/* Left Section */}
          <section className="flex-1 md:pr-8">
            <h3 className="text-secondary text-2xl md:text-3xl font-bold md:font-black leading-tight md:leading-snug">
              Crafting Digital Foundations for Remodeling Success
            </h3>

            <div className="mt-10 space-y-6">
              <div className="font-semibold md:font-bold md:text-lg flex items-center gap-3">
                <FaCheck className="text-legendary text-xl" />
                <h4>
                  Custom Web Design Solutions
                  <span className="text-legendary"> To Drive Conversions</span>
                </h4>
              </div>
              <div className="font-semibold md:font-bold md:text-lg flex items-center gap-3">
                <FaCheck className="text-legendary text-xl" />
                <h4>
                  Effective Marketing Campaigns
                  <span className="text-legendary"> To Generate Growth</span>
                </h4>
              </div>
              <div className="font-semibold md:font-bold md:text-lg flex items-center gap-3">
                <FaCheck className="text-legendary text-xl" />
                <h4>
                  Tailored Branding Strategies
                  <span className="text-legendary"> To Drive Engagement</span>
                </h4>
              </div>
            </div>

            <p className="mt-8 font-medium text-base md:text-lg">
              We develop custom websites, branding strategies, and marketing
              campaigns that help remodeling contractors build a strong online
              presence and increase conversions. Our team collaborates closely
              with clients to ensure each project aligns with their unique
              business goals and brand identity. With our technical and
              marketing expertise, we ensure you achieve the results that matter
              most—more clients, better leads, and sustained growth.
            </p>
          </section>

          {/* Right Section */}
          <section className="flex-1">
            <div className="w-full h-auto">
              <Image
                className="w-full h-auto object-cover"
                src="/images/solutions.png.webp"
                alt="Solutions Image"
                width={500}
                height={300}
                priority={true}
              />
            </div>
          </section>
        </div>
      </ResponsiveContainer>
      <ReviewSection />
      <WhyChoose />
      <FaqSection />
      <ContactUs />
    </>
  );
};

export default AboutPage;

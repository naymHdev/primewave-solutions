import SectionName from "@/components/common/SectionName";
import MainServices from "./MainServices";

const OurService = () => {
  return (
    <>
      <SectionName
        name="Transformative Custom Websites for Home Remodelers"
        title="Building Digital Experiences as Stunning as Your Remodels"
        details="Empower Your Business: Create a Lasting Impression with Tailored Designs That Showcase Your Expertise and Attract Your Ideal Clients"
      />
      <div className="container mx-auto px-4 md:px-0">
        <MainServices />
      </div>
    </>
  );
};

export default OurService;

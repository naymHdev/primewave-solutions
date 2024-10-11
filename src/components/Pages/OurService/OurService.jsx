import SectionName from "@/components/common/SectionName";
import MainServices from "./MainServices";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

const OurService = () => {
  return (
    <>
      <SectionName
        name="Transformative Custom Websites for Home Remodelers"
        title="Building Digital Experiences as Stunning as Your Remodels"
        details="Empower Your Business: Create a Lasting Impression with Tailored Designs That Showcase Your Expertise and Attract Your Ideal Clients"
      />
      <ResponsiveContainer>
        <MainServices />
      </ResponsiveContainer>
    </>
  );
};

export default OurService;

import RouteBanner from "@/components/common/RouteBanner";
import SectionName from "@/components/common/SectionName";
import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import DesignProcess from "@/components/Pages/DesignProcess/DesignProcess";
import Gallery from "@/components/Pages/Portfolio/Gallery";
import Portfolio from "@/components/Pages/Portfolio/Portfolio";
import TechToolsUsed from "@/components/Pages/Portfolio/TechToolsUsed";

const Portfolios = () => {
  return (
    <>
      <RouteBanner
        src="/videos/work fishing.mp4"
        name="Crafting Exceptional Digital Experiences that Drive Success"
        title=""
      />
      <div>
        <SectionName
          name="FEATURED WORK"
          title="Your Trusted Partner in Home Remodeling"
          details="We're a design first, digital agency focused on delivering custom solutions that function flawlessly, elevate each brand's design aesthetic, digital reach and in-turn help garner consumer loyalty."
        />
      </div>
      <Portfolio />
      <DesignProcess />
      <TechToolsUsed />
      <Gallery />
      <ContactUs /> /
    </>
  );
};

export default Portfolios;

import SectionName from "@/components/common/SectionName";
import Portfolio from "@/components/Pages/Portfolio/Portfolio";

const FeaturedWorks = () => {
  return (
    <>
      <div>
        <SectionName
          name="FEATURED WORK"
          title="Your Trusted Partner in Home Remodeling"
          details="We're a design first, digital agency focused on delivering custom solutions that function flawlessly, elevate each brand's design aesthetic, digital reach and in-turn help garner consumer loyalty."
        />
      </div>
      <div>
        <Portfolio />
      </div>
    </>
  );
};

export default FeaturedWorks;

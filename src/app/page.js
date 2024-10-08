import Banner from "@/components/banner/Banner";
import SectionName from "@/components/common/SectionName";
import Portfolio from "@/components/Pages/Portfolio/Portfolio";

export default function Home() {
  return (
    <main>
      <Banner />
      <SectionName
        name="FEATURED WORK"
        title="Your Trusted Partner in Home Remodeling"
        details="We're a design first, digital agency focused on delivering custom solutions that function flawlessly, elevate each brand's design aesthetic, digital reach and in-turn help garner consumer loyalty."
      />
      <div className="mt-6">
        <Portfolio />
      </div>
    </main>
  );
}

import SectionName from "@/components/common/SectionName";
import Portfolio from "./Portfolio";
import Link from "next/link";

const FeaturedWork = () => {
  return (
    <>
      <SectionName
        name="FEATURED WORK"
        title="Your Trusted Partner in Home Remodeling"
        details="We're a design first, digital agency focused on delivering custom solutions that function flawlessly, elevate each brand's design aesthetic, digital reach and in-turn help garner consumer loyalty."
      />
      <div className="mt-6">
        <Portfolio />
      </div>
      <section className="bg-secondary py-10 mt-24">
        <div className="container mx-auto px-4 md:px-0 flex flex-col items-center space-y-6 text-center md:flex-row md:space-y-0 md:justify-between md:text-left">
          {/* Icon and Text */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start gap-2">
            <h2 className="text-xl font-bold text-white max-w-sm md:max-w-none">
              WANT TO SEE MORE FEATURED WORK?
            </h2>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end">
            <Link href="/works">
              <button className="capitalize border-2 border-white hover:border-primary hover:text-primary px-8 py-2 text-xl font-semibold text-white transition-all duration-300">
                view featured works
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedWork;

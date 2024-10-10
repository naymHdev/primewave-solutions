import Banner from "@/components/banner/Banner";
import MarqueeComponent from "@/components/MarqueeComponent";
import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import HowGoing from "@/components/Pages/HowGoing/HowGoing";
import OurService from "@/components/Pages/OurService/OurService";
import FeaturedWork from "@/components/Pages/Portfolio/FeaturedWork";
import ReviewSection from "@/components/Pages/Reviews/Reviews";
import Solutions from "@/components/Pages/Solutions/Solutions";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedWork />
      <OurService />
      <ReviewSection />
      <HowGoing />
      <Solutions />
      <ContactUs />
      <MarqueeComponent />
    </main>
  );
}

import Banner from "@/components/banner/Banner";
import MarqueeComponent from "@/components/MarqueeComponent";
import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import DesignProcess from "@/components/Pages/DesignProcess/DesignProcess";
import FaqSection from "@/components/Pages/Faq/FaqSection";
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
      <DesignProcess />
      <Solutions />
      <MarqueeComponent />
      <FaqSection />
      <ContactUs />
    </main>
  );
}

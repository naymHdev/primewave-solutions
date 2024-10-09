import Banner from "@/components/banner/Banner";
import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import OurService from "@/components/Pages/OurService/OurService";
import FeaturedWork from "@/components/Pages/Portfolio/FeaturedWork";
import ReviewSection from "@/components/Pages/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedWork />
      <OurService />
      <ReviewSection />
      <ContactUs />
    </main>
  );
}
